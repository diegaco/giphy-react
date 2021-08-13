import { useState, useCallback, useEffect, useContext, useRef } from "react";
import { Context } from "../context/UserContext";
import { auth, signInWithGoogle, createUserProfileDoc, addFavorite, deleteFavorite, getFavorites } from '../services/firebase.utils';

export default function useUser() {
  const { user, setUser, favs, setFavs } = useContext(Context);
  const [loading, setLoading] = useState(false);
  let unsubscribeFromAuth = useRef();

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot(async snap => {
          // TODO aca leo favoritos
          const favs = await getFavorites({ userId: snap.id });
          const user = {
            id: snap.id,
            ...snap.data()
          }
          setUser(user);
          setFavs(favs);
          setLoading(false);
        })
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth.current();
  }, [setUser, setFavs])

  const login = useCallback(() => {
    setLoading(true);
    signInWithGoogle();
  }, []);

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  const addFav = useCallback(async ({ userId, favId }) => {
    const favs = await addFavorite({ userId, favId });
    setFavs(favs);
  }, [setFavs]);

  const deleteFav = useCallback(async({ userId, favId }) => {
    const favs = await deleteFavorite({ userId, favId });
    setFavs(favs);
  }, [setFavs]);

  return {
    isLoggedIn: Boolean(user),
    user,
    login,
    logout,
    loading,
    favs,
    addFav,
    deleteFav
  }
}
