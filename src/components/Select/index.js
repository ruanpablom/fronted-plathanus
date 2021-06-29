import React from 'react';

import { Container, StyledSelect, StyledLabel, Error } from './styles';

function Select({ options, value, name, errorName, hasError, onChange, style, id }) {
  return (
    <Container style={style}>
      <StyledLabel>{name}</StyledLabel>
      <StyledSelect id={id} defaultValue={value} onChange={(event) => onChange(event)}>
        <option key="0" value="">{`Slecione o ${name.toLowerCase()}`}</option>
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