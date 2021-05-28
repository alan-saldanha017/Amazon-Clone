import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGE0Mm7LKXX94GiTJUjbM7KcVg_Mcl7f0",
    authDomain: "clone-f55ee.firebaseapp.com",
    databaseURL: "https://clone-f55ee.firebaseio.com",
    projectId: "clone-f55ee",
    storageBucket: "clone-f55ee.appspot.com",
    messagingSenderId: "99425505761",
    appId: "1:99425505761:web:e9de2e326ee930d56742a0",
    measurementId: "G-2X9CZGT4QJ"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db =firebaseapp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};