import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAwd3xD9Ea_Ses3dcJ6dKK7ZvDhsEkVrUk",
    authDomain: "crwn-clthn-db.firebaseapp.com",
    projectId: "crwn-clthn-db",
    storageBucket: "crwn-clthn-db.appspot.com",
    messagingSenderId: "511061520846",
    appId: "1:511061520846:web:5b2a6f35c122c829333b9f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
