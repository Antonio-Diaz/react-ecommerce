import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "kingstyle-db.firebaseapp.com",
  databaseURL: "https://kingstyle-db.firebaseio.com",
  projectId: "kingstyle-db",
  storageBucket: "kingstyle-db.appspot.com",
  messagingSenderId: "1097656727360",
  appId: "1:1097656727360:web:6b0dba4a68602bd64aaca5",
  measurementId: "G-C153XW7Q32"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

export default firebase;