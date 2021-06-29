import React from 'react';

import { ListItemContainer, Topic } from './styles';

function ListItemNoticia({ item, history}) {
  return <ListItemContainer>
    <Topic>
      <strong>Titulo:</strong>
      <span>
        {item.titulo}
      </span>
    </Topic>
    <Topic>
      <strong>Texto:</strong>
      <span>
        {item.texto}
      </span>
    </Topic>
    <Topic>
      <strong>Autor:</strong>
      <span>
        {` ${item.autor.nome}`}
      </span>
    </Topic>
    <button type="button" onClick={() => history.push(`/noticia/${item.id}`)}>IR PARA A NOTÍCIA</button>
  </ListItemContainer>;
}

export default ListItemNoticia;