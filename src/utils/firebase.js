// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.FIREBASE,
  authDomain: "nextjs-blog-418409.firebaseapp.com",
  projectId: "nextjs-blog-418409",
  storageBucket: "nextjs-blog-418409.appspot.com",
  messagingSenderId: "808013825797",
  appId: "1:808013825797:web:7c77ce9e785a0b68b1d96c",
  measurementId: "G-TRK16965GJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);