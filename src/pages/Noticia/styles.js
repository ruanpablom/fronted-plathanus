import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`;

export const Title = styled.h1`
  color: #00db7d;
`;

export const Texto = styled.h2`
  color: #00db7d;
  white-space: pre-line;
  margin-top: 10px;
  font-weight: lighter;
`;

export const Autor = styled.h4`
  color: #00db7d;
  margin-top: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button{
    margin-top: 20px;
    background-color: #00db7d;
    padding: 0.5rem;
    border-style: none;
    cursor: pointer;
    width: fit-content;
    color: #070a57;
    display: flex;
    align-items: center;
  }

  button + button{
    margin-left: 1rem;
  }
`;