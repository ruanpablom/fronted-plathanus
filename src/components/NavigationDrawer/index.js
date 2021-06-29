import React from 'react';
import { Link } from 'react-router-dom';


import { Close, Container, Menu, MenuItem } from './styles';

function NavigationDrawer({isOpen, closeNavigation}) {
  return (
  <Container isOpen={isOpen}>
    <Close size={24} color="#fff" onClick={closeNavigation}/>
    <Menu>
      <MenuItem>
        <Link to="/" onClick={closeNavigation}>Pesquisar Notícias</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cadastro-noticia" onClick={closeNavigation}>Cadastrar Notícia</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cadastro-autor" onClick={closeNavigation}>Cadastrar Autor</Link>
      </MenuItem>
    </Menu>
  </Container>
  );
}

export default NavigationDrawer;