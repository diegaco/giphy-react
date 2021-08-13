import { createContext, useState } from "react";

export const Context = createContext([]);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [favs, setFavs] = useState([]);
  return (
    <Context.Provider value={{user, setUser, favs, setFavs}}>
      { children }
    </Context.Provider>
  )
}

