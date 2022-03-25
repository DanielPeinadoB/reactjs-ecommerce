// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFuyEeSxq1xJPskK20MYpRgZ5MUum18D4",
  authDomain: "coder-reactjs-ecommerce.firebaseapp.com",
  projectId: "coder-reactjs-ecommerce",
  storageBucket: "coder-reactjs-ecommerce.appspot.com",
  messagingSenderId: "426458094098",
  appId: "1:426458094098:web:ca9c848861c1e15075d6cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);