import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9SO8RUsuZMnZDuWcBIWEq__mHmgy8-nE",
  authDomain: "auth-milon-4aef9.firebaseapp.com",
  projectId: "auth-milon-4aef9",
  storageBucket: "auth-milon-4aef9.appspot.com",
  messagingSenderId: "798252600527",
  appId: "1:798252600527:web:9a2c659a6991102213bbba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;