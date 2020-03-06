import styled from 'styled-components';

export const Header = styled.header`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #231651;
  padding-left: 1.5em;
  padding-right: 1.5em;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  height: 4.5em;
  width: 25%;
  justify-content: flex-end;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
`;

export const LinkContainer = styled.li`
  color: #F3D9DC;
  text-decoration: none;
  text-indent: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 500;
  color: #F3D9DC;
`;

export const LogoutButton = styled.button`

`;