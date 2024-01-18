// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8ulqpInB0noy_xrZR8EvarhzNnkwLOE",
  authDomain: "honkytonk-606df.firebaseapp.com",
  projectId: "honkytonk-606df",
  storageBucket: "honkytonk-606df.appspot.com",
  messagingSenderId: "184450005103",
  appId: "1:184450005103:web:c3fccd167e63ae03ec359a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider ()