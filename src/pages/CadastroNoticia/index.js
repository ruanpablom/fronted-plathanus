import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import PageTitle from '../../components/PageTitle';
import Select from '../../components/Select';
import { Container } from './styles';

function CadastroNoticia() {
  const [ titulo, setTitulo ] = useState('');
  const [ tituloError, setTituloError ] = useState(false);
  const [ texto, setTexto ] = useState('');
  const [ textoError, setTextoError] = useState(false);
  const [ autor, setAutor ] = useState({id: null, nome:'Selecione o autor'});
  const [ autorError, setAutorError ] = useState(false);
  const [ autores, setAutores ] = useState([]);

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const result = await axios({
          method: 'get',
          url: `${process.env.REACT_APP_HOST_URL}/api/autores`,
        });
        setAutores(result.data.response);
        setAutorError(false);
      }catch(err){
        setAutores([]);
        setAutorError(true);
      }
    }
    fetchAutores();
  }, []);

const inserirNoticia = async () => {
  try {
    const result = await axios({
      method: 'post',
      data: {
        titulo,
        texto,
        autorId: autor.id,
      },
      url: `${process.env.REACT_APP_HOST_URL}/api/noticias`,
    });
    toast.success('Noticia inserida com sucesso!');
    setTexto('');
    setTitulo('');
    setAutor({});
  }catch(err){
    console.log({err});
  }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!titulo){
      setTituloError(true);
    }
    if(!texto){
      setTextoError(true);
    }
    if(!autor.id){
      setAutorError(true);
    }
    if(titulo && texto && autor.id){
      inserirNoticia();
      resetSelect();
    }
  }

  const resetSelect = () => {
    const select = document.getElementById('select-autores');
    select.selectedIndex = 0;
  }

  const onChangeTitulo = (event) => {
    setTituloError(event.target.value ? false : true);
    setTitulo(event.target.value);
  }

  const onChangeTexto = (event) => {
    setTextoError(event.target.value ? false : true);
    setTexto(event.target.value);
  }

  const onChangeAutor = (event) => {
    const autorValue = JSON.parse(event.target.value);
    setAutorError(autorValue.id ? false : true);
    setAutor(autorValue);
  }

  return <Container>
    <PageTitle>
      Cadastro de Notícia
    </PageTitle>
    <Form onSubmit={handleSubmit}>
      {/* <label>Título</label>
      <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} /> */}
      <Input
        value={titulo}
        type="text" 
        name="Título"
        errorName="Você precisa inserir um título"
        hasError={tituloError}
        onChange={onChangeTitulo} 
      />
      <Textarea 
        name="Texto" 
        rows="10" 
        value={texto} 
        onChange={onChangeTexto}
        style={{marginTop: '20px'}}
        errorName="Você precisa inserir um texto" 
        hasError={textoError}
      />
      <Select id="select-autores"
        options={autores}
        value={autor.nome} 
        name="Autor"
        errorName={autores.length === 0 ? "Você precisa cadastrar pelo menos um autor" : "Selecione um autor"}
        hasError={autorError} 
        onChange={onChangeAutor}
        style={{marginTop: '20px'}}
      />
      <button type="submit">Cadastrar Noticia</button>
    </Form>
  </Container>
}

export default CadastroNoticia;