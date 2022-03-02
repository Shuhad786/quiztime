import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJwtY7F9FYKO_IkhCmccleU3CiR_HjW2c",
  authDomain: "quiztimefirebase.firebaseapp.com",
  projectId: "quiztimefirebase",
  storageBucket: "quiztimefirebase.appspot.com",
  messagingSenderId: "515899345639",
  appId: "1:515899345639:web:bfa447d212decd86f0f042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();