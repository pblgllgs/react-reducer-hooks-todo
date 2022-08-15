import { useState } from 'react';
import { UserContext } from './UserContext';

export const initialContextState = JSON.parse(localStorage.getItem('user')) || {};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialContextState);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
