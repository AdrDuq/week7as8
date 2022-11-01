// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,

  authDomain: "week7as8.firebaseapp.com",

  projectId: "week7as8",

  storageBucket: "week7as8.appspot.com",

  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,

  appId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };