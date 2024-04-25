// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,signOut as firebaseSignOut} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIx087cu3uqsfu64d0XySfRAzRs-UUHMs",
  authDomain: "authentication-17574.firebaseapp.com",
  projectId: "authentication-17574",
  storageBucket: "authentication-17574.appspot.com",
  messagingSenderId: "628975101336",
  appId: "1:628975101336:web:cb49be3d9d8f72aea637ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    // Handle sign-out errors
    console.error('Error signing out:', error);
  }
};

export {auth,signOut}