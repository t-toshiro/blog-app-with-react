
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPgkniN_CLpLbofLXJbpofkXVwQ3JK9is",
  authDomain: "blog-d6530.firebaseapp.com",
  projectId: "blog-d6530",
  storageBucket: "blog-d6530.firebasestorage.app",
  messagingSenderId: "696274679114",
  appId: "1:696274679114:web:048ade8804280ca746fdb3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };