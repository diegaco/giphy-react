import { useCallback } from "react";
import { useEffect, useContext, useRef } from "react";
import { Context } from "../context/UserContext";
import { auth, signInWithGoogle } from '../services/firebase.utils';

export default function useUser() {
  const { user, setUser } = useContext(Context);
  let unsubscribeFromAuth = useRef();

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribeFromAuth.current();
  }, [setUser])

  const login = useCallback(() => {
    signInWithGoogle();
  }, []);

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  return {
    isLoggedIn: Boolean(user),
    user,
    login,
    logout
  }
}
