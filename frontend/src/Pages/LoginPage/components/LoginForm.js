import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

import { Form, Label, Button, Fieldset, Input } from './styled';

const LoginForm = () => {
  const emailEl = useRef('')
  const passwordEl = useRef('')

  const {
    login
  } = useAuth()

  const url = 'http://localhost:3001/graphql'

  const submitHandler = event => {
    event.preventDefault()
    const email = emailEl.current.value.trim()
    const password = passwordEl.current.value.trim()

    if (email.length === 0 || password.length === 0) {
      return;
    }

    let reqBody = {
      query: `
        query {
          login (email:"${email}", password: "${password}") {
            token
            userId
            tokenExpiration
          }
        }
      `
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('Sukkel')
        }
      })
      .then(response => {
        if (response.data.login) {
          login(
            response.data.login.token,
            response.data.login.userId,
            response.data.login.tokenExpiration
          )
        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <Form onSubmit={submitHandler}>
      <Fieldset>
        <Label htmlFor="email">E-mail:</Label>
        <Input type="email" id="email" ref={emailEl} />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" ref={passwordEl} />
      </Fieldset>
      <Fieldset>
        <Button type="submit">Login</Button>
      </Fieldset>
    </Form>
  )
}

export default LoginForm