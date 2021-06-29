import React, {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import PageTitle from '../../components/PageTitle';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { Container } from './styles';

function CadastroAutor() {
  const [autor, setAutor] = useState('');
  const [ autorError, setAutorError ] = useState(false);

  const cadastrarAutor = async () => {
    try{
      await axios({
        method: 'post',
          url: `${process.env.REACT_APP_HOST_URL}/api/autores`,
          data: {
            nome: autor,
          },
      });
      toast.success('Autor cadastrado com sucesso!')
      setAutor('');
    }catch(err){
      if(err.response && err.response.data.name === 'validation'){
        err.response.data.messages.forEach(message => {
          console.log(message)
          toast.error(message.message)
        })
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!autor){
      setAutorError(true);
    }else {
      setAutorError(false);
      cadastrarAutor();
    }
  }

  const handlerAutorChange = (event) => {
    if(event.target.value){
      setAutorError(false);
      setAutor(event.target.value);
    }else {
      setAutorError(true);
      setAutor(event.target.value);
    }
  }

  return (
    <Container>
      <PageTitle>Cadastrar Autor</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          value={autor}
          type="text" 
          name="Autor"
          errorName="Você precisa inserir um autor"
          hasError={autorError}
          onChange={handlerAutorChange} />
        {/* <label>Nome</label>
        <input type="text" value={autor} onChange={handlerAutorChange}/>
        {
          autorError 
          && 
          <label className="error">O nome é necessário</label>
        } */}
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}

export default CadastroAutor;