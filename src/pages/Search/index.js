import React from 'react';
import { MdSearch } from 'react-icons/md';

import PageTitle from '../../components/PageTitle';
import { Container, SearchContainer, SearchInput, SearchButton } from './styles';

function Search() {
  return <Container>
    <PageTitle>
      Pesquisar Notícias
    </PageTitle>
    <SearchContainer>
      <SearchInput type="text" name="serach" />
      <SearchButton>
        <MdSearch size={24} color="#fff" />
      </SearchButton>
    </SearchContainer>
  </Container> ;
}

export default Search;