// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAkEhTm1Qeo4-HwFhHlRu5GhOWmJdoqUE",
  authDomain: "newandry-eb4f9.firebaseapp.com",
  projectId: "newandry-eb4f9",
  storageBucket: "newandry-eb4f9.appspot.com",
  messagingSenderId: "802016351126",
  appId: "1:802016351126:web:e7fb647604e9940bdd03b7",
  measurementId: "G-C5DNBEF4HM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
