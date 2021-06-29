import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  li + li {
    margin-top: 10px;
  }
`;

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px #00db7d solid;
  border-radius: 4px;
  padding: 0.5rem;

  button{
    margin-top: 0.5rem;
    color: #070a57;
    background-color: #00db7d;
    padding: 0.5rem;
    font-weight: bold;
    border-style: none;
    cursor: pointer;
  }
`;

export const Topic = styled.div`
  display: flex;
  strong{
    color:#00db7d;
    margin-right: 0.2rem;
  }

  span{
    display: -webkit-box;
    -webkit-line-clamp: 1; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#00db7d;
  }
`;

