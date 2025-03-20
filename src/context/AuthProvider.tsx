import React, { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  
    const login = (newToken: string) => {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    };
  
    const logout = () => {
      localStorage.removeItem("token");
      setToken(null);
    };
  
    return (
      <AuthContext.Provider value={{ token, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;