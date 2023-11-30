// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import {getAuth, GoogleAuthProvider} from 'firebase'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4myhKIjSdnMGRLSaniF5thLbdxJkPFk",
  authDomain: "answermenow-7b567.firebaseapp.com",
  projectId: "answermenow-7b567",
  storageBucket: "answermenow-7b567.appspot.com",
  messagingSenderId: "517305879307",
  appId: "1:517305879307:web:25de64a2fbbbbc078a700e",
  measurementId: "G-TK2EJW0PPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
