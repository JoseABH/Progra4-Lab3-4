import React, { createContext, useState } from 'react';
import { useUserState } from '../Hooks/useUserState';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const { login } = useUserState();

   const logout = () => {
      setUser(null);
   }
   
   return (
      <AuthContext.Provider value={{ user, setUser, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}