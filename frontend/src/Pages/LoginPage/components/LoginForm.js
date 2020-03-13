import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Context/AuthContext';

import { Form, Label, Button, Fieldset, Input, AlertText, AlertTextContainer } from './styled';

const LoginForm = () => {
  const [validationError, setValidationError] = useState(false)
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
      setValidationError(true)
      setTimeout(() => setValidationError(false), 2000)
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
    <>
      <AlertTextContainer>
        <AlertText active={validationError}>*Please fill in all of the form fields</AlertText>
      </AlertTextContainer>
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
    </>
  )
}

export default LoginForm