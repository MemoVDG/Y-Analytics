import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFRpI3f5gxElrjeuKTvcvQDXdDtwH_ZJc",
    authDomain: "regionalismoslat.firebaseapp.com",
    databaseURL: "https://regionalismoslat.firebaseio.com",
    projectId: "regionalismoslat",
    storageBucket: "regionalismoslat.appspot.com",
    messagingSenderId: "676770453059",
    appId: "1:676770453059:web:b30aa70a14888a611fe6f6"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
