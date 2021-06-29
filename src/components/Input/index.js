import React from 'react';

import { Container, StyledInput, StyledLabel, Error } from './styles';

function Input({ value, type, name, errorName, hasError, onChange, style }) {
  return (
    <Container style={style}>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput value={value} type={type} onChange={(event) => onChange(event)} />
      {
        hasError
        &&
        <Error>{errorName}</Error>
      }
    </Container>
  );
}

export default Input;