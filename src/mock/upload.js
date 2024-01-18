import MOCK_DATA from './data.json' assert { type: 'json'}

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"
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
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id
    addDoc(productosRef, item)
})