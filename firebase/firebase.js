// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4XFvImO9-MG2veM1C5Wmu6mefambgoY",
  authDomain: "perimeter-ffe11.firebaseapp.com",
  projectId: "perimeter-ffe11",
  storageBucket: "perimeter-ffe11.appspot.com", 
  messagingSenderId: "314951159234",
  appId: "1:314951159234:web:1a6b85a120c4d1a57c1a5b",
  measurementId: "G-PB8DMXFH73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { app, firestore, db, auth, storage };