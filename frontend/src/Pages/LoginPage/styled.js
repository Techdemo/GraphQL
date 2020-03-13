import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ProzaLibre-Medium;
  font-size: 48px;
  color: #100B00;
`;

export const Button = styled.button`
  font-family: OpenSans-Regular;
  font-size: 16px;
  color: #100B00;
  text-decoration: underline;
  outline: none;
  border: none;
  text-align: center;
  transition: ease-in background-color 0.2s;

  :hover {
    cursor: pointer;
    background-color: #E7E6F7;
  }
`;