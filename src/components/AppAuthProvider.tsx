import React, { useState, ReactNode } from 'react';
import AuthContext from '../contexts/index';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const saveToken = (token: string) => {
    localStorage.setItem('userId', token);
  };

  const storedUser = localStorage.getItem('userId');
  const userName = storedUser ? JSON.parse(storedUser).username : null;

  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut, saveToken, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;