import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCY8kArIpdxhiuZa2S7AUthU6NsU4bp3Bs",
    authDomain: "crown-clothing-db-7f881.firebaseapp.com",
    projectId: "crown-clothing-db-7f881",
    storageBucket: "crown-clothing-db-7f881.appspot.com",
    messagingSenderId: "123543124621",
    appId: "1:123543124621:web:1881add9935db5cad840c4",
    measurementId: "G-11NB3DQ2CR"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async(userAuth, additionalData) =>{
  if(!userAuth)return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({displayName, email, createAt,...additionalData});
    } catch (error) {
      console.error('Error while creating user profile!!', error.message);
    }
  }
  
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;