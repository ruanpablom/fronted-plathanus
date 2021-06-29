import React from 'react';

import { Container, StyledSelect, StyledLabel, Error } from './styles';

function Select({ options, value, name, errorName, hasError, onChange, style }) {
  return (
    <Container style={style}>
      <StyledLabel>{name}</StyledLabel>
      <StyledSelect defaultValue={value} onChange={(event) => onChange(event)}>
        {
          options.map(option => 
            (<option key={option.id} value={Object.keys(option).length > 0 ? JSON.stringify(option) : option}>{option.nome}</option>)
          )
        }
      </StyledSelect>
      {
        hasError
        &&
        <Error>{errorName}</Error>
      }
    </Container>
  );
}

export default Select;