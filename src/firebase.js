import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgy_W3eD6pW_EGjavWGXG5Ty28LfeKaHA",
  authDomain: "dream-journal-779f3.firebaseapp.com",
  databaseURL: "https://dream-journal-779f3.firebaseio.com",
  projectId: "dream-journal-779f3",
  storageBucket: "dream-journal-779f3.appspot.com",
  messagingSenderId: "887214919631",
  appId: "1:887214919631:web:f37c599e097702249accba",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
