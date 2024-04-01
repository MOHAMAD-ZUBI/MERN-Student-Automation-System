import PropTypes from 'prop-types';
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser('');
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
