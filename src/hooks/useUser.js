import { useState, useCallback, useContext } from 'react';
import { Context } from '../context/UserContext';
import { auth, createUserProfileDoc , signInWithGoogle, addFavorite, deleteFavorite } from '../services/firebase.utils';

export default function useUser() {
  const { user, favs } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setError(false);
      setMessage('Login successfully');
      setLoading(false);
    } catch (err) {
      setError(true);
      setMessage(`Login incorrect. ${err.message}`);
      setLoading(false);
    }
  }, []);

  const register = useCallback(async ({ displayName, email, password, confirmPassword  }) => {
    setLoading(true);
    console.log(password, confirmPassword);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName });
      setLoading(false);
    } catch (err) {
      throw err;
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
    register,
    logout,
    loading,
    error,
    message,
    favs,
    addFav,
    deleteFav
  }
}
