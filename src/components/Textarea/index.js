import React from 'react';

import { Container, StyledTextarea, StyledLabel, Error, } from './styles';

function Textarea({ value, name, errorName, hasError, onChange, style, ...props }) {
  return (
    <Container style={style}>
      <StyledLabel>{name}</StyledLabel>
      <StyledTextarea name={name} value={value} onChange={(event) => onChange(event)} {...props} />
      {
        hasError
        &&
        <Error>{errorName}</Error>
      }
    </Container>
  );
}

export default Textarea;