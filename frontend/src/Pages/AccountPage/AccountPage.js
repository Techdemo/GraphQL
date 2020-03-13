import React, { useEffect } from 'react'
// import { useAuth } from '../../../Context/AuthContext';

import { Title, Container } from './styled';

const AccountPage = () => {
  const [user, setUser] = React.useState('')
  // const {
  //   userId
  // } = useAuth()

  // useEffect(() => {

  //   const url = 'http://localhost:3001/graphql'
  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(reqBody),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => {
  //     if(res.status === 200) {
  //       return res.json()
  //     } else {
  //       throw new Error('Sukkel')
  //     }
  //   })
  //   .then(response => {
  //     console.log("response", response.data)
  //   })
  // }, [])

  return (
    <Container>
      <Title>My Account</Title>
    </Container>
  )
}

export default AccountPage