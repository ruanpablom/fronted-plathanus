import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios';
import { MdDelete, MdEdit } from 'react-icons/md';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { Container, Title, Texto, Autor, ButtonsContainer } from './styles';

function Noticia({history}) {
  const { id } = useParams();
  const [ isEditing, setIsEditing ] = useState(false);
  const [ noticia, setNoticia ] = useState({});
  const [ autores, setAutores ] = useState([]);

  useEffect(()=>{
    fetchNoticia();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(isEditing){
      fetchAutores();
    }else {
      fetchNoticia();
    }
  }, [isEditing]);

  const fetchNoticia = async () => {
    try{
      const result = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_HOST_URL}/api/noticias/${id}`,
      });
      setNoticia(result.data.response);
    }catch(err){
      console.log({err});
      history.push('/');
    }
  }

  const fetchAutores = async () => {
    try{
      const result = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_HOST_URL}/api/autores`,
      });
      setAutores(result.data.response);
      setSelected();
    }catch(err){
      console.log({err});
    }
  }

  const updateNoticia = async () => {
    try{
      const result = await axios({
        method: 'put',
        url: `${process.env.REACT_APP_HOST_URL}/api/noticias`,
        data: {
          id: noticia.id,
          titulo: noticia.titulo,
          texto: noticia.texto,
          autorId: noticia.autor.id,
        }
      });
      toast.success(result.data.response.message);
      setIsEditing(false);
    }catch(err){
      console.log({err});
    }
  }

  const setSelected = () => {
    const select = document.getElementById('select-autores');
    const options = select.options;

    for(let i = 0; i < options.length; i++){
      let value = options[i].value;
      if(value){
        value = JSON.parse(value);
        if(value.id === noticia.autor.id){
          select.selectedIndex = i;
          break;
        }
      }
    }
  }

  const deleteNoticia = async () => {
    try{
      const result = await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_HOST_URL}/api/noticias`,
        data: {
          id: noticia.id
        }
      });
      toast.success(result.data.response);
      history.push('/');
    }catch(err){
      console.log({err});
    }
  }

  const handleSave = (event) => {
    event.preventDefault();
    updateNoticia();
  }
  
  return (
    <Container>
      {
        !isEditing && Object.keys(noticia).length !== 0
        ?
        <>
          <Title>{noticia.titulo}</Title>
          <Texto>
            {noticia.texto}
          </Texto>
          <Autor>Autor: {noticia.autor.nome}</Autor>
          <ButtonsContainer>
            <button type="button" onClick={() => setIsEditing(true)}>Editar<MdEdit size={24} /></button>
            <button type="button" style={{backgroundColor: 'red'}} onClick={deleteNoticia}>Excluir<MdDelete size={24} /></button>
          </ButtonsContainer>
        </>
        :
        <Form onSubmit={handleSave}>
          <Input
            value={noticia.titulo}
            type="text" 
            name="Título"
            errorName="Você precisa inserir um título"
            hasError={noticia.titulo ? false : true}
            onChange={(event) => setNoticia({...noticia, titulo: event.target.value})} 
          />
          <Textarea 
            name="Texto" 
            rows="10" 
            value={noticia.texto} 
            onChange={(event) => setNoticia({...noticia, texto: event.target.value})}
            style={{marginTop: '20px'}}
            errorName="Você precisa inserir um texto" 
            hasError={noticia.texto ? false : true}
          />
          <Select id="select-autores" 
            options={autores}
            value={noticia.autor} 
            name="Autor"
            errorName={autores.length === 0 ? "Você precisa cadastrar pelo menos um autor" : "Selecione um autor"}
            hasError={noticia.autor ? false : true} 
            onChange={(event) => setNoticia({...noticia, autor: JSON.parse(event.target.value)})}
            style={{marginTop: '20px'}}
          /> 
          <button type="submit">Salvar</button>
        </Form>
      }
    </Container>
  );
}

export default Noticia;