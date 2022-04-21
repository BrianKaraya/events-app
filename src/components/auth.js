import { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(null);

  const login = () => {
    setUserName(username);
    //   navigate('/');
  };

  const logout = () => {
    setUserName(null);
    <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
