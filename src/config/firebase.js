import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVRVdZmRcfHU1C32yyLx4SqnPbp1FJ8a8",
    authDomain: "whatsapp-mern-auth-781de.firebaseapp.com",
    projectId: "whatsapp-mern-auth-781de",
    storageBucket: "whatsapp-mern-auth-781de.appspot.com",
    messagingSenderId: "466038984912",
    appId: "1:466038984912:web:b04bb838d28045233c4ed5"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, storage, provider}
export default db