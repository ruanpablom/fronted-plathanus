import React from 'react';

import { PageTitle as Title } from './styles';

function PageTitle({children}) {
  return <Title>
    {children}
  </Title>;
}

export default PageTitle;