import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

import { Form, Label, Button, Fieldset, Input } from './styled';

const LoginForm = () => {
  const emailEl = useRef('')
  const passwordEl = useRef('')

  const {
    login
  } = useAuth()

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
            name
          }
        }
      `
    }
    login(reqBody)
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