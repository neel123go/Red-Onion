// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkuG2FqZki8C0IiEB3_ZN8v1SdpOf0mmc",
    authDomain: "red-onion-6bb49.firebaseapp.com",
    projectId: "red-onion-6bb49",
    storageBucket: "red-onion-6bb49.appspot.com",
    messagingSenderId: "914352170016",
    appId: "1:914352170016:web:84c9f35c4df7f24da24845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;