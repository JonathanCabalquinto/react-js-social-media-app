
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWmZsMP8NTSmAIDJuBSqeL-PZKLL1VWho",
    authDomain: "react-course-97cd1.firebaseapp.com",
    projectId: "react-course-97cd1",
    storageBucket: "react-course-97cd1.appspot.com",
    messagingSenderId: "335405146015",
    appId: "1:335405146015:web:a197513375fbd3eeae27aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)