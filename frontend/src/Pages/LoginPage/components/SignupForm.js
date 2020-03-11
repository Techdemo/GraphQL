import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

import { CreateAccountForm, Label, Button, Fieldset, Input } from './styled';

const SignupForm = () => {
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
        password.length === 0) {
      return;
    }
    const reqBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", name: "${name}", password: "${password}", age: ${age}, city: "${city}"}) {
              _id
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
         console.log("res status", res.status)
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('Sukkel', Error)
        }
      })
      // TODO: Hier kun je iets doen met de dingen die worden gereturned.
      // .then(response => {
      //   console.log("respnse data", response.data)
      //   if (response.data.login) {
      //     login(
      //       response.data.login.token,
      //       response.data.login.userId,
      //       response.data.login.tokenExpiration
      //     )
      //   }
      // })
      .catch(err => {
        console.log(err)
      })
    }

  return (
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
  )
}

export default SignupForm
