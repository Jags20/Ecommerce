// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhG5cfPt7VdiXtDVC3yK3PEJZOLi7qkM",
  authDomain: "e-commerce-f3267.firebaseapp.com",
  projectId: "e-commerce-f3267",
  storageBucket: "e-commerce-f3267.appspot.com",
  messagingSenderId: "149216458974",
  appId: "1:149216458974:web:1c3e1044c58dfca19aea4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;