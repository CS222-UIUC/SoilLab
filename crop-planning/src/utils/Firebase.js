// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjQvvfI5xBatNheTNM5Lja-A40ed1oqk8",
  authDomain: "crop-planning222.firebaseapp.com",
  projectId: "crop-planning222",
  storageBucket: "crop-planning222.appspot.com",
  messagingSenderId: "269932947742",
  appId: "1:269932947742:web:06e964b5e5a18c3071810f",
  measurementId: "G-BFKKZYRKR5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = firebase.firestore();

export default firebase;