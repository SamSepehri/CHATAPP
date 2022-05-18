import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import Constants from "expo-constants";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAO0aUgE-pSlRBCSbVrjqQveA3lh20gweo",
    authDomain: "chatapp-2c6ff.firebaseapp.com",
    projectId: "chatapp-2c6ff",
    storageBucket: "chatapp-2c6ff.appspot.com",
    messagingSenderId: "640873293089",
    appId: "1:640873293089:web:7ed8ab3b8ba96d95248a60",
    measurementId: "G-M40NZC5B1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service (db)
export const db = getFirestore(app);

// Get a reference to the Firebase auth object
export const auth = getAuth();