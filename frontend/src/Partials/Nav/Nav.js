import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavContainer, ListContainer, Title, LinkContainer, Header, LogoutButton, Subtitle } from './styled'
import { useAuth } from '../../Context/AuthContext';

const Nav = () => {
  const {
    token,
    logout,
    username
  } = useAuth()

  return (
    <Header>
      <Title>Dating App</Title>
      <Subtitle>{username}</Subtitle>
      <NavContainer>
        <ListContainer>
          {token && (
            <>
              <LinkContainer>
                <NavLink className="navLink" to="/users">Users</NavLink>
              </LinkContainer>
              <LinkContainer>
                <NavLink className="navLink" to="/account">My account</NavLink>
              </LinkContainer>
              <LinkContainer>
                <LogoutButton onClick={logout}>log out</LogoutButton>
              </LinkContainer>
            </>
          )}
          {!token && (
            <LinkContainer>
              <NavLink className="navLink" to="/login">login</NavLink>
            </LinkContainer>
          )}
        </ListContainer>
      </NavContainer>
    </Header>
  )
}

export default Nav