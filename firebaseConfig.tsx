import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDXWtPPGAAte8BJNQRJfqkQQ7rCZoiJ_e0",
  authDomain: "jobly-9dc47.firebaseapp.com",
  databaseURL: "https://jobly-9dc47-default-rtdb.firebaseio.com",
  projectId: "jobly-9dc47",
  storageBucket: "jobly-9dc47.appspot.com",
  messagingSenderId: "156065311845",
  appId: "1:156065311845:web:c8ee03d944abf01b446a8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app); // Add Firebase Storage
