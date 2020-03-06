import React, { useContext, createContext, useState } from 'react';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [tokenExpiration, setTokenExpiration] = useState(null)

  const login = (token, userId, tokenExpiration) => {
    setToken(token)
    setUserId(userId)
    setTokenExpiration(tokenExpiration)
  }

  const logout = () => {
    console.log("log out function in context")
    setToken(null)
    setUserId(null)
    setTokenExpiration(null)
  }

  return <AuthContext.Provider value={{
    tokenExpiration,
    setTokenExpiration,
    userId,
    setUserId,
    token,
    setToken,
    login,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)