// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxu3jhkhxDgxlc52uuYiDKRh4sIHANhDg",
  authDomain: "react-firebase-auth-c1112.firebaseapp.com",
  projectId: "react-firebase-auth-c1112",
  storageBucket: "react-firebase-auth-c1112.firebasestorage.app",
  messagingSenderId: "854860554232",
  appId: "1:854860554232:web:fedcdf2d9d9ec0422dc00d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);