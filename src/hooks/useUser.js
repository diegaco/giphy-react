import { useCallback, useContext } from 'react';
import { Context } from '../context/UserContext';
import { auth, createUserProfileDoc , signInWithGoogle, addFavorite, deleteFavorite } from '../services/firebase.utils';

export default function useUser() {
  const { user, favs } = useContext(Context);

  const login = useCallback(async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      throw err;
    }
  }, []);

  const register = useCallback(async ({ displayName, email, password, confirmPassword  }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName });
    } catch (err) {
      throw err;
    }
  }, []);

  const loginWithGoogle = useCallback(async () => {
    await signInWithGoogle();
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
    register,
    logout,
    favs,
    addFav,
    deleteFav
  }
}
