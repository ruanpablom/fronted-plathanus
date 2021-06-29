import React, { useState } from 'react';
import axios from 'axios';

import { MdSearch } from 'react-icons/md';

import PageTitle from '../../components/PageTitle';
import List from '../../components/List';
import { Container, SearchContainer, SearchInput, SearchButton } from './styles';

function Search({history}) {
  const [ noticias, setNoticias ] = useState([]);
  const [ naoEncontrado, setNaoEcontrontrado ] = useState('');
  const [ filter, setFilter ] = useState('');

  const fetchNoticias = async () => {
    try{
      const result = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_HOST_URL}/api/noticias?filter=${filter}`,
      });
      
      if(typeof result.data.response === "string"){
        setNaoEcontrontrado(result.data.response);
        setNoticias([]);
      }else{
        setNoticias(result.data.response);
        setNaoEcontrontrado('');  
      }
    }catch(err){
      console.log({err});
    }
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      fetchNoticias();
    }
  }

  return <Container>
    <PageTitle>
      Pesquisar Notícias
    </PageTitle>
    <SearchContainer>
      <SearchInput type="text" name="search" onKeyPress={handleKeyPress} onChange={(event) => setFilter(event.target.value)}/>
      <SearchButton onClick={fetchNoticias}>
        <MdSearch size={24} color="#fff" />
      </SearchButton>
    </SearchContainer>
    { noticias.length > 0
      &&
      <List items={noticias} history={history}/>
    }
    {
      naoEncontrado
      &&
      <h2>{naoEncontrado}</h2>
    }
  </Container> ;
}

export default Search;