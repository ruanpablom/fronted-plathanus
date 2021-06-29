import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
  const [ autorError, setAutorError ] = useState(true);
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
      }
    }
    fetchAutores();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!titulo){
      setTituloError(true);
    }
    if(!texto){
      setTextoError(true);
    }
    console.log(texto);
    console.log(autor);
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
      <Select
        options={autores}
        value={autor.nome} 
        name="Autor"
        errorName="Você precisa cadastrar pelo menos um autor"
        hasError={autorError} 
        onChange={onChangeAutor}
        style={{marginTop: '20px'}}
      />
      <button type="submit">Cadastrar</button>
    </Form>
  </Container>
}

export default CadastroNoticia;