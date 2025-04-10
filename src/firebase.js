// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0sb7rh9Gpyk73YoqTHfAJKSeEnG19t-c",
  authDomain: "bank-app-421d7.firebaseapp.com",
  projectId: "bank-app-421d7",
  storageBucket: "bank-app-421d7.firebasestorage.app",
  messagingSenderId: "986374187315",
  appId: "1:986374187315:web:598dfb5eb84ea083627646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);


export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);