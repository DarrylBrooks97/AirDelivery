import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB23k1hY3I9EhhqVr7MyPd6_NjFnyvoFI8",
  authDomain: "be-smart-hackathon.firebaseapp.com",
  databaseURL: "https://be-smart-hackathon.firebaseio.com",
  projectId: "be-smart-hackathon",
  storageBucket: "be-smart-hackathon.appspot.com",
  messagingSenderId: "322331733844",
  appId: "1:322331733844:web:0a1da4117ebe23219962c1",
  measurementId: "G-29VV9Y647W",
};

// Instance of database
const db = firebase.initializeApp(firebaseConfig).firestore();
export { db };
