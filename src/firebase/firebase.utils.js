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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
