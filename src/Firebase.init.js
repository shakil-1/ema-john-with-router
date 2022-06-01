// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKOXUaQKVfgJLYjbtMOCDWB7fhCCep_7k",
    authDomain: "ema-john-with-router-b1fdf.firebaseapp.com",
    projectId: "ema-john-with-router-b1fdf",
    storageBucket: "ema-john-with-router-b1fdf.appspot.com",
    messagingSenderId: "629578788466",
    appId: "1:629578788466:web:7daf29cf4f42bd51cbdceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;