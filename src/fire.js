
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

export const fire = firebase.initializeApp({
    apiKey: "AIzaSyBn2-TlDj_7ymf8xgv8BCHnZhw-TrsD-Kg",
    authDomain: "chat-app-4bb8f.firebaseapp.com",
    projectId: "chat-app-4bb8f",
    storageBucket: "chat-app-4bb8f.appspot.com",
    messagingSenderId: "811756318150",
    appId: "1:811756318150:web:ac7f0168181cc0ac7916c7",
  });
  
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();