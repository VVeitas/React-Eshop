import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBov0b9kAz2du8H_uc0T1gzXyt_LbQRYZI',
  authDomain: 'react-eshop-db-84e3e.firebaseapp.com',
  databaseURL: 'https://react-eshop-db-84e3e.firebaseio.com',
  projectId: 'react-eshop-db-84e3e',
  storageBucket: 'react-eshop-db-84e3e.appspot.com',
  messagingSenderId: '105957904305',
  appId: '1:105957904305:web:5e3e24e90ec3d48e7b3790',
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
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
        ...additionalData,
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
