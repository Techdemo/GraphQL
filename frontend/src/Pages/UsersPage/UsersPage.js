import React, { useEffect, useState } from 'react';

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
      <h3>Je bent ingelogd</h3>
      {users.map((user, index) =>
        <div key={index}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>)}
    </>
  )
}

export default UsersPage