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

// Initialize Firebase
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
