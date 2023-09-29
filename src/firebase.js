// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLCm-CmE6GMNJJKFoLGDHrHs1n87AnRTs",
  authDomain: "blog-c3337.firebaseapp.com",
  projectId: "blog-c3337",
  storageBucket: "blog-c3337.appspot.com",
  messagingSenderId: "32053789632",
  appId: "1:32053789632:web:6a21f17d73c0802b8ffe25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};