// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAz2pl8mBmPhWHbOwuuUuKQ37pvC1qmL0",
  authDomain: "restaurant-auth-5a646.firebaseapp.com",
  projectId: "restaurant-auth-5a646",
  storageBucket: "restaurant-auth-5a646.appspot.com",
  messagingSenderId: "17278684987",
  appId: "1:17278684987:web:621f3fa24ca30c798db11e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
