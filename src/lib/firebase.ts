"use client";
// Import the functions you need from the SDKs you need
import { type FirebaseOptions, initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA-Nbcvkw-KQ_K0xe-CqWpHGsWbWevvhwI",
    authDomain: "pwa-builder-test-eff92.firebaseapp.com",
    projectId: "pwa-builder-test-eff92",
    storageBucket: "pwa-builder-test-eff92.appspot.com",
    messagingSenderId: "626953279187",
    appId: "1:626953279187:web:0d39419afe4ccc0172a626",
    measurementId: "G-D7X98HQNRR"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export const messaging = () => getMessaging(firebaseapp);

export default firebaseapp;
