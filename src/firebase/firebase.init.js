// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oCdVD3NKE3GDCBX2jSo2wI9O3_6Y4AQ",
  authDomain: "use-email-password-auth-acd62.firebaseapp.com",
  projectId: "use-email-password-auth-acd62",
  storageBucket: "use-email-password-auth-acd62.firebasestorage.app",
  messagingSenderId: "468784296876",
  appId: "1:468784296876:web:36177f827d9ae851a38009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth