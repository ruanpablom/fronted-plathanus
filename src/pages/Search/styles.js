import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 2.5rem;
  width: 70%;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border-color: #00db7d;
  border-style: solid;
  padding: 0.5rem 1rem;
  border-radius: 20px 0px 0px 20px;
  border-right-style: none;
  color: #00db7d;
  width: 100%;
`;

export const SearchButton = styled.button`
  color: #fff;
  padding: 0px 5px 0px 5px;
  background-color: #00db7d;
  border-style: none;
  border-radius: 0px 20px 20px 0px;
`;