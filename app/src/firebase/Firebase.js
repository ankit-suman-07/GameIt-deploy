// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLDBZglvAtzmLCTY30xjnhmxXVfSoynYQ",
    authDomain: "fir-login-87a3d.firebaseapp.com",
    databaseURL: "https://fir-login-87a3d-default-rtdb.firebaseio.com",
    projectId: "fir-login-87a3d",
    storageBucket: "fir-login-87a3d.appspot.com",
    messagingSenderId: "156114533247",
    appId: "1:156114533247:web:197534b638b30293acf84a",
    measurementId: "G-XSHZPG8EP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };