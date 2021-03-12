import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZ3hd4xSg4JuUav-5ysh1t-OWjuW6pywg",
  authDomain: "expense-tracker-85ab8.firebaseapp.com",
  projectId: "expense-tracker-85ab8",
  storageBucket: "expense-tracker-85ab8.appspot.com",
  messagingSenderId: "119944477373",
  appId: "1:119944477373:web:4c334821d4405e6b5295d4",
  measurementId: "G-RW4F4XGHVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };