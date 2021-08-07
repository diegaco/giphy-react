import { useCallback, useContext } from "react";
import { Context } from "../context/UserContext";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(() => {
    setJWT('algo')
  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT('')
  }, [setJWT]);


  return {
    isLoggedIn: Boolean(jwt),
    login,
    logout
  }
}
