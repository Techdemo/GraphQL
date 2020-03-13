import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Context/AuthContext';

import { CreateAccountForm, Label, Button, Fieldset, Input, AlertText, AlertTextContainer } from './styled';

const SignupForm = () => {
  const [validationError, setValidationError] = useState(false)
  const emailEl = useRef('')
  const passwordEl = useRef('')
  const cityEl = useRef('')
  const ageEl = useRef('')
  const nameEl = useRef('')

  const {
    login
  } = useAuth()

  const url = 'http://localhost:3001/graphql'

  const submitHandler = event => {
    event.preventDefault()
    const email = emailEl.current.value.trim()
    const password = passwordEl.current.value.trim()
    const city = cityEl.current.value.trim()
    const age = ageEl.current.value.trim()
    const name = nameEl.current.value.trim()

    if (email.length === 0 ||
      password.length === 0 ||
      city.length === 0 ||
      age.length === 0 ||
      name.length === 0) {
      setValidationError(true)
      setTimeout(() => setValidationError(false), 2000)
      return;
    }

    const reqBody = {
      query: `
          mutation {
            createUser(userInput: {email: "${email}", name: "${name}", password: "${password}", age: ${age}, city: "${city}"}) {
              id
              email
            }
          }
        `
    };

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
          throw new Error('Sukkel', Error)
        }
      })
      .then(data => {
        let query = {
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
        login(query)
      })
    .catch(err => {
      console.log(err)
      alert(err)
    })
  }

  return (
    <>
      <AlertTextContainer>
        <AlertText active={validationError}>*Please fill in all of the form fields</AlertText>
      </AlertTextContainer>
      <CreateAccountForm onSubmit={submitHandler}>
        <Fieldset>
          <Label htmlFor="name">First Name</Label>
          <Input type="name" id="name" ref={nameEl} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" ref={emailEl} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">password</Label>
          <Input type="password" id="password" ref={passwordEl} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" ref={cityEl} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="age">age</Label>
          <Input type="number" id="age" ref={ageEl} />
        </Fieldset>
        <Fieldset>
          <Button type="submit">Signup</Button>
        </Fieldset>
      </CreateAccountForm>
    </>
  )
}

export default SignupForm