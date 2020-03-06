import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

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
    <form onSubmit={submitHandler}>
      <p>This is a form for logging in the app</p>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" ref={emailEl} />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </fieldset>
      <fieldset>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  )
}

export default LoginForm