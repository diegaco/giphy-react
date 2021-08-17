import { useState, useCallback, useContext } from 'react';
import { Context } from '../context/UserContext';
import { auth, signInWithGoogle, addFavorite, deleteFavorite } from '../services/firebase.utils';

export default function useUser() {
  const { user, favs } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const login = useCallback( async ({ email, password}) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const loginWithGoogle = useCallback(() => {
    setLoading(true);
    signInWithGoogle();
  }, []);

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  const addFav = useCallback(async ({ userId, favId }) => {
    await addFavorite({ userId, favId });
  }, []);

  const deleteFav = useCallback(async({ userId, favId }) => {
    await deleteFavorite({ userId, favId });
  }, []);

  return {
    isLoggedIn: Boolean(user),
    user,
    login,
    loginWithGoogle,
    logout,
    loading,
    favs,
    addFav,
    deleteFav
  }
}
