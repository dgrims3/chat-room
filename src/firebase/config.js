
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUSwE2_I5OYMUPyW74hWyAZosSJhkqr3k",
    authDomain: "live-chat-9a30d.firebaseapp.com",
    projectId: "live-chat-9a30d",
    storageBucket: "live-chat-9a30d.appspot.com",
    messagingSenderId: "1086557717183",
    appId: "1:1086557717183:web:f46ea87a49fd28ba833c0a"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }