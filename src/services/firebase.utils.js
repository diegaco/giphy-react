import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration

const config = {
  apiKey: 'AIzaSyBay7BOQLX_NafVNLWcAC6bYdWp4G-e2cY',
  authDomain: "giffy-1c657.firebaseapp.com",
  projectId: "giffy-1c657",
  storageBucket: "giffy-1c657.appspot.com",
  messagingSenderId: "148434212164",
  appId: "1:148434212164:web:c24a40e1e4a54ffea5b311"
};

export const createUserProfileDoc = async (user, data) => {
  console.log('create profile');
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        id: user.uid,
        displayName,
        email,
        photoURL,
        createdAt,
        ...data
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addFavorite = async ({ userId, favId }) => {
  console.log('add fav');
  if (!userId) return;

  const favRef = firestore.doc(`users/${userId}/favorites/${favId}`);
  const favSnap = await favRef.get();

  if (!favSnap.exists) {
    try {
      console.log('add');
      await favRef.set({
        favId
      });
    } catch (error) {
      console.log('error creating fav', error.message);
    }
  }

  return favRef;
};

export const deleteFavorite = async ({ userId, favId }) => {
  console.log('delete fav');
  if (!userId) return;
  const favRef = firestore.doc(`users/${userId}/favorites/${favId}`);
  const favSnap = await favRef.get();

  if (favSnap.exists) {
    try {
      console.log('remove');
      await favRef.delete();
    } catch (error) {
      console.log('error deleting fav', error.message);
    }
  }

  return favRef;
};

export const getFavorites = async ({ userId }) => {
  console.log('get favs');
  if (!userId) return;

  const favRef = firestore.collection(`users/${userId}/favorites`);

  return favRef;
};

// Initialize Firebase
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
