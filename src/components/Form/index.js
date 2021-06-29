import React from 'react';

import { Form as FormStyled } from './styles';

function Form({children, onSubmit}) {
  return (
    <FormStyled onSubmit={onSubmit}>
      {children}
    </FormStyled>
  );
}

export default Form;