
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyBAnEYo_UuzOAuwia6Sry9ZFOP7W6xX7SY",
  authDomain: "pic-app-13be3.firebaseapp.com",
  projectId: "pic-app-13be3",
  storageBucket: "pic-app-13be3.appspot.com",
  messagingSenderId: "331670202098",
  appId: "1:331670202098:web:29a09cbaca70353dcbd26b"
};

// Initialize Firebase
const app = initializeApp(config);
const auth = getAuth(app); // Initialize Firebase Auth

export const firebaseui = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID, // Add email/password sign-in
  ]
};

export default auth; // Export the Firebase Auth instance