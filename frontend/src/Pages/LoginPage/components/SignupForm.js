import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

const SignupForm = () => {
  const emailEl = useRef('')
  const passwordEl = useRef('')
  const cityEl = useRef('')
  const ageEl = useRef('')

  const {
    login
  } = useAuth()

  const url = 'http://localhost:3001/graphql'

  const submitHandler = event => {
    console.log("SUBMITHANDLER")
    event.preventDefault()
    const email = emailEl.current.value.trim()
    const password = passwordEl.current.value.trim()
    const city = cityEl.current.value.trim()
    const age = ageEl.current.value.trim()
    console.log("TYPEOF AGE", typeof age)
    console.log("AGE", age)
    // if (email.length === 0 ||
    //     password.length === 0) {
    //   return;
    // }

    const reqBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}", age: ${age}, city: "${city}"}) {
              _id
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
        console.log("Then wordt uitgevoerd")
        console.log(res)
        if (res.status === 200) {
          console.log(res.status)
          return res.json()
        } else {
          throw new Error('Sukkel', Error)
        }
      })
      .then(response => {
        console.log("response", response)
        console.log("respnse data", response.data)
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
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" ref={emailEl} />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={passwordEl} />
      </fieldset>
      <fieldset>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityEl} />
      </fieldset>
      <fieldset>
        <label htmlFor="age">age</label>
        <input type="number" id="age" ref={ageEl} />
      </fieldset>
      <fieldset>
        <button type="submit">Signup</button>
      </fieldset>
    </form>
  )
}

export default SignupForm