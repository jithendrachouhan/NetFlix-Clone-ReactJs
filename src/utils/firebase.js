// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8WkxVmOMjb05WGAqSymACoIgspqkWtyY",
  authDomain: "auth-test-92217.firebaseapp.com",
  projectId: "auth-test-92217",
  storageBucket: "auth-test-92217.appspot.com",
  messagingSenderId: "145574324490",
  appId: "1:145574324490:web:be9b4ba4a9e693fc3672f3",
  measurementId: "G-E1X38G639J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
