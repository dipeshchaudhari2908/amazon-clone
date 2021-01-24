// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBZB8e4c2eccJ9LLR859OO4wgA0pts6q2E",
    authDomain: "clone-329df.firebaseapp.com",
    projectId: "clone-329df",
    storageBucket: "clone-329df.appspot.com",
    messagingSenderId: "949441761953",
    appId: "1:949441761953:web:42ae85ef24b94d11e6d6e0",
    measurementId: "G-B8PK8ELH9X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };