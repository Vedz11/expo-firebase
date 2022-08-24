// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3NAJZf271n5yShUEqdiBZqmczTl_5FcA",
  authDomain: "fir-try-beb3e.firebaseapp.com",
  projectId: "fir-try-beb3e",
  storageBucket: "fir-try-beb3e.appspot.com",
  messagingSenderId: "847223315762",
  appId: "1:847223315762:web:d9fbe2b89818e183e94b2b",
  measurementId: "G-E6B1HVTKSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
