import React from 'react'

export const fetchUsers = () => {
  const requestBody = {
      query: `
        query {
          users {
            password
            city
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
      console.log("RESDATA", resData)
      return resData
    })
    .catch(err => {
      console.log(err);
    });

}