import React from 'react';

import { ListContainer } from './styles';
import ListItemNoticia from './ListItemNoticia';

function List({items, history}) {
  return <ListContainer>
    {
      items.map(item => (
        <ListItemNoticia key={item.id} item={item} history={history}/>
      ))
    }
  </ListContainer>;
}

export default List;