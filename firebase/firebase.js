// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3zJcCEWFDislEia0_nxRHT848v6Luo1I",
  authDomain: "hearth-29dac.firebaseapp.com",
  projectId: "hearth-29dac",
  storageBucket: "hearth-29dac.firebasestorage.app",
  messagingSenderId: "683826532095",
  appId: "1:683826532095:web:234dde145308126ab986ca",
  measurementId: "G-SB33Q0P89Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { app, firestore, db, auth, storage };