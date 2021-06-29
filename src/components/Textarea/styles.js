import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextarea = styled.textarea`
  background-color: transparent;
  border: 1px #00db7d solid;
  color: #00db7d;
  padding: 0.5rem;
`;

export const StyledLabel = styled.label`
  color: #00db7d;
`;

export const Error = styled.label`
  color: red;
  margin-top: 0px !important;
`;