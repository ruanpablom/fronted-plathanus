import React from 'react';

import { MdDehaze } from 'react-icons/md';

import {Container} from './styled';

function Header({openNavigation}) {
  // const location = useLocation();
  
  return (
    <Container>
      <MdDehaze size={20} color="#00db7d" onClick={openNavigation}/>
    </Container>
  );
}

export default Header;