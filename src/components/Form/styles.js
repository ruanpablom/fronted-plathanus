import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  /* .error{
    color: red;
    margin-top: 0px;
  } */

  /* label{
    color: #00db7d;
  }

  input{
    background-color: transparent;
    border: 1px #00db7d solid;
    color: #00db7d;
    padding: 0.5rem;
  } */

  textarea{
    background: transparent;
    border: 1px #00db7d solid;
    color: #00db7d;
    padding: 0.5rem;
  }

  select{
    background-color: transparent;
    border: 1px #00db7d solid;
    color: #00db7d;
    padding: 0.5rem;
    option{
      background-color: rgb(7 10 87);
    }
  }

  input + label {
    margin-top: 20px;
  }

  textarea + label {
    margin-top: 20px;
  }

  button{
    margin-top: 20px;
    color: #00db7d;
    background-color: transparent;
    padding: 0.5rem;
    border: 1px #00db7d solid;
  }
`;