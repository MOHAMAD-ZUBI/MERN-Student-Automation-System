/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  token: "",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Load token from cookies on component mount
    const storedToken = Cookies.get("token");
    setToken(storedToken || "");
  }, [token]);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const login = (newToken) => {
    setToken(newToken);
    // Store token in cookies
    document.cookie = `token=${newToken};`;
  };

  const logout = () => {
    setToken("");
    // Remove token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
