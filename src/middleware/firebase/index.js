import firebase from "firebase/app";
import auth from 'firebase/auth'
import firestore from "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyBHCZpc-sfudxLoZNFg5h2Y-5WHuwDl1_s",
    authDomain: "chat-me-df2df.firebaseapp.com",
    projectId: "chat-me-df2df",
    storageBucket: "chat-me-df2df.appspot.com",
    messagingSenderId: "927077119765",
    appId: "1:927077119765:web:20260fb0e1689d82e1db1c",
    measurementId: "G-3010PY5H5W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
    firebase
}