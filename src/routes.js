import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import CadastroNoticia from './pages/CadastroNoticia';
import CadastroAutor from './pages/CadastroAutor';
import Noticia from './pages/Noticia';

export default function Routes(){
  return (
    <>
      <Switch>
        <Route path='/' exact component={ Search }/>
        <Route path='/cadastro-noticia' exact component={ CadastroNoticia }/>
        <Route path='/cadastro-autor' exact component={ CadastroAutor }/>
        <Route path='/noticia/:id' component={ Noticia } />
      </Switch>
    </>
  )
}