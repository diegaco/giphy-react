import { useState, useCallback, useEffect, useContext, useRef } from "react";
import { Context } from "../context/UserContext";
import { auth, signInWithGoogle, createUserProfileDoc } from '../services/firebase.utils';

export default function useUser() {
  const { user, setUser } = useContext(Context);
  const [loading, setLoading] = useState(false);
  let unsubscribeFromAuth = useRef();

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot(snap => {
          console.log(snap);
          // TODO aca leo favoritos
          const user = {
            id: snap.id,
            ...snap.data()
          }
          setUser(user);
          setLoading(false);
        })
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth.current();
  }, [setUser])

  const login = useCallback(() => {
    setLoading(true);
    signInWithGoogle();
  }, []);

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  return {
    isLoggedIn: Boolean(user),
    user,
    login,
    logout,
    loading
  }
}
