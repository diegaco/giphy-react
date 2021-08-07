import { createContext, useState } from "react";

export const Context = createContext([]);

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState('');
  return (
    <Context.Provider value={{jwt, setJWT}}>
      { children }
    </Context.Provider>
  )
}

