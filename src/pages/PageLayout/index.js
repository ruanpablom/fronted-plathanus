import React, {useState} from 'react';

import Header from '../../components/Header';
import NavigationDrawer from '../../components/NavigationDrawer';
import { Container } from './styled';

function PageLayout({ children }) {
  const [isOpenNavigationDrawer, setIsOpenNavigationDrawer] = useState(false);

  const handleNavigationDrawerClick = () => {
    setIsOpenNavigationDrawer(!isOpenNavigationDrawer);
  }

  return (
    <>
      <Header openNavigation={handleNavigationDrawerClick}/>
      <Container>
        {children}
      </Container>
      <NavigationDrawer isOpen={isOpenNavigationDrawer} closeNavigation={handleNavigationDrawerClick}/>
    </>
  );
}

export default PageLayout;