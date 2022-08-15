import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCbV_sJXnAJA3Dj-X70BZrJHgPS8UiS4Lg",
    authDomain: "twitter-clone-3b6dc.firebaseapp.com",
    projectId: "twitter-clone-3b6dc",
    storageBucket: "twitter-clone-3b6dc.appspot.com",
    messagingSenderId: "862230084958",
    appId: "1:862230084958:web:2fc01c84cd34fca1fc63cf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;