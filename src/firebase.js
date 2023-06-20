import * as firebase from "firebase/app";
import "firebase/database"; // or 'firebase/firestore' for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDFAHzv2CzvGz1R8k0JUp8PY2IrdHlVqBk",
  authDomain: "data-form-f1db2.firebaseapp.com",
  databaseURL: "https://data-form-f1db2-default-rtdb.firebaseio.com",
  projectId: "data-form-f1db2",
  storageBucket: "data-form-f1db2.appspot.com",
  messagingSenderId: "1073526520314",
  appId: "1:1073526520314:web:5463a6e8695f25954f0c43",
  measurementId: "G-8WDYHHGNPN",
};

firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase instance
export default firebase;
