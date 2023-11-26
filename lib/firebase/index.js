'use client';
'use strict';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLWDW1CmBdPv4fMtdCfDsC4E-aj4828yA",
  authDomain: "webdev2-project.firebaseapp.com",
  projectId: "webdev2-project",
  storageBucket: "webdev2-project.appspot.com",
  messagingSenderId: "1065682494916",
  appId: "1:1065682494916:web:edd7735033d7ad17e0f091",
  measurementId: "G-QD9FZVX6H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFirestore(app);
const auth = getAuth(app);


export {app, analytics, fireStore, auth}