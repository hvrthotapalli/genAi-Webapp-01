// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLYrgR0judGFp5yBIk-cFeFbgt6r14G7M",
  authDomain: "genai-poc-2024.firebaseapp.com",
  projectId: "genai-poc-2024",
  storageBucket: "genai-poc-2024.appspot.com",
  messagingSenderId: "629641851913",
  appId: "1:629641851913:web:c4386cde6a43e5d5f2b4d8",
  measurementId: "G-ZFMWDRPFT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);