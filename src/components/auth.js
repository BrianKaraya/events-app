import { useContext, useState } from 'react';
import { createContext } from 'react';
//import { AuthProvider } from '../context/userAuthContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const llogin = (user) => {
    setUser(user);
  };
  const llogout = (user) => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, llogin, llogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
