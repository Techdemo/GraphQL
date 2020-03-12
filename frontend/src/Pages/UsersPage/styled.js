import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1.5em;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 500;
  color: #100B00;
`;

export const UserContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  background-color: #E7E6F7;
  width: 25%;
  border-radius: 5px;
  margin-bottom: 1.2em;
`;

export const UserTitle = styled.h3`
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.5em;
  color: #100B00;
  font-weight: 500;
`;

export const UserAge = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  color: #100B00;
  font-weight: 300;
`;