import React from 'react';

import { Container, Title, Texto, Autor } from './styles';

function Noticia() {
  return (
    <Container>
      <Title>Titulo</Title>
      <Texto>
        {
          `A Ford anunciou nesta segunda-feira (28) que sua empresa de serviços financeiros, Ford Credit, vai encerrar operações no Brasil e Argentina.

          Como resultado, a unidade vai registrar um encargo contábil de até US$ 375 milhões`
        }
      </Texto>
      <Autor>Autor: Nome do Autor</Autor>
    </Container>
  );
}

export default Noticia;