// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "", //replace with your firebase key
    authDomain: "clone-3e28a.firebaseapp.com",
    projectId: "clone-3e28a",
    storageBucket: "clone-3e28a.appspot.com",
    messagingSenderId: "311101916947",
    appId: "1:311101916947:web:91a50f7cf35a7254ccfce6",
    measurementId: "G-W322EYK4WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

