
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqLAlR2DcsBjv9gdL2h23an9k-1SFNWoo",
    authDomain: "debe-ui.firebaseapp.com",
    databaseURL: "https://debe-ui-default-rtdb.firebaseio.com",
    projectId: "debe-ui",
    storageBucket: "debe-ui.appspot.com",
    messagingSenderId: "1050384892098",
    appId: "1:1050384892098:web:8ffa1630552b351cf27b5b"
  };
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();


  
  export { db };