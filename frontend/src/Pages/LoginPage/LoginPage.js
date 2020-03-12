import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import { Title, Button } from './styled';

const LoginPage = () => {
  const [toggleLogin, setToggleLogin] = useState(true)

  return (
    <>
      <Title>{toggleLogin ? 'Login' : 'Create account'}</Title>
      {toggleLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <Button onClick={() => setToggleLogin(!toggleLogin)}>I want to {toggleLogin ? 'create an account' : 'login to my account'} </Button>
    </>
  )
}

export default LoginPage