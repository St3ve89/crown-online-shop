import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEKjVAVhUXgtKUt6kCiDHPTJGSJ54Soj8',
  authDomain: 'crwn-db-e667c.firebaseapp.com',
  databaseURL: 'https://crwn-db-e667c.firebaseio.com',
  projectId: 'crwn-db-e667c',
  storageBucket: 'crwn-db-e667c.appspot.com',
  messagingSenderId: '540097870390',
  appId: '1:540097870390:web:0634734d0f3f4416fe7697',
  measurementId: 'G-JMPVEVNYKD'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
