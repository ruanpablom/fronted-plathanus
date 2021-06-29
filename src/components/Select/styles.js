import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSelect = styled.select`
  background-color: transparent;
  border: 1px #00db7d solid;
  color: #00db7d;
  padding: 0.5rem;

  option{
    background-color: rgb(7 10 87);
  }
`;



export const StyledLabel = styled.label`
  color: #00db7d;
`;

export const Error = styled.label`
  color: red;
  margin-top: 0px !important;
`;