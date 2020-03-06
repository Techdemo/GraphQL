import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

import Nav from './Partials/Nav/Nav';

import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Main />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
