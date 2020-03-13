import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import UsersPage from './Pages/UsersPage/UsersPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AccountPage from './Pages/AccountPage/AccountPage'

import { useAuth } from './Context/AuthContext';

const Main = () => {
  const {
    token
  } = useAuth()
  const [sessionToken, setSessionToken] = React.useState(null)

  React.useEffect(() => {
    setSessionToken(token)
  }, [token])

  return (
    <main>
      <Switch>
        {sessionToken && <Redirect from="/" to="/users" exact />}
        {sessionToken && (
          <Redirect from="/login" to="/users" exact />
        )}
        {!sessionToken && (
          <Redirect from="/users" to="/login" exact />
        )}
        {!sessionToken && (
          <Redirect from="/account" to="/login" exact />
        )}
        {!sessionToken && (
          <Route path="/login" component={LoginPage} />
        )}
        <Route path="/account" component={AccountPage} />
        <Route path="/users" component={UsersPage} />
        {!sessionToken && <Redirect to="/login" exact />}
      </Switch>
    </main>
  );
}

export default Main;