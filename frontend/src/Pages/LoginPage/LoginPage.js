import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const LoginPage = () => {
  const [toggleLogin, setToggleLogin] = useState(true)

  const {
    login
  } = useAuth()

  return (
    <>
      {toggleLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <button onClick={() => setToggleLogin(!toggleLogin)}>I want to {login ? 'create an account' : 'login to my account'} </button>
    </>
  )
}

export default LoginPage