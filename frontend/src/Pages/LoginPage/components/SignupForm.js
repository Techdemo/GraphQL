import React, { useRef } from 'react'
import { useAuth } from '../../../Context/AuthContext';

const SignupForm = () => {
  const [file, setFile] = React.useState(null)
  const emailEl = useRef('')
  const passwordEl = useRef('')
  const cityEl = useRef('')
  const ageEl = useRef('')
  const fileEl = useRef('')

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

    const fileData = new FormData();
    fileData.append('file', file)
    fileData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

    // if (email.length === 0 ||
    //     password.length === 0) {
    //   return;
    // }

    // const reqBody = {
    //     query: `
    //       mutation {
    //         createUser(userInput: {email: "${email}", password: "${password}", age: ${age}, city: "${city}"}) {
    //           _id
    //           email
    //         }
    //       }
    //     `
    //   };


    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       return res.json()
    //     } else {
    //       throw new Error('Sukkel', Error)
    //     }
    //   })
    //   .then(response => {
    //     console.log("respnse data", response.data)
    //     if (response.data.login) {
    //       login(
    //         response.data.login.token,
    //         response.data.login.userId,
    //         response.data.login.tokenExpiration
    //       )
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
  console.log("FILE", file)

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
        <label htmlFor="profilePic">Upload Profile picture</label>
        <input type="file" id="profilePic" onChange={setFile} />
      </fieldset>
      <fieldset>
        <button type="submit">Signup</button>
      </fieldset>
    </form>
  )
}

export default SignupForm