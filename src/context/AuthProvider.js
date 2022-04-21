import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  //const [username, setUserName] = useState(null);

  /*  const login = (username) => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  }; */

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

/* export const useAuth = () => {
  return useContext(AuthContext);
}; */
