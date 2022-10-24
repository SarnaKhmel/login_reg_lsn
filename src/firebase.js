// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALTyHLoURb6eh0K5XWm9-sJTcFIq3LUwY",
  authDomain: "adry-ec8fd.firebaseapp.com",
  projectId: "adry-ec8fd",
  storageBucket: "adry-ec8fd.appspot.com",
  messagingSenderId: "861290331227",
  appId: "1:861290331227:web:34f8da4c71e256cb60d37e",
  measurementId: "G-6CG2VNF24H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
