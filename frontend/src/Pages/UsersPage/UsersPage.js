import React, { useEffect, useState } from 'react';

import { Title, UserContainer, Container, UserTitle, UserAge } from './styled';

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const requestBody = {
      query: `
        query {
          users {
            age
            name
          }
        }
        `
    };

    fetch('http://localhost:3001/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        setUsers(resData.data.users)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <>
      {console.log("users", users)}
      <Title>Users</Title>
      <Container>
        {users.map((user, index) =>
          <UserContainer key={index}>
            <UserTitle>Naam: {user.name}</UserTitle>
            <UserAge>Leeftijd: {user.age}</UserAge>
          </UserContainer>)}
      </Container>
    </>
  )
}

export default UsersPage