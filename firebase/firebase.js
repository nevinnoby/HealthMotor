// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHIy7ypGUUuAM6tExLWwNJ93wPBtEWT8",
  authDomain: "health-f41fb.firebaseapp.com",
  projectId: "health-f41fb",
  storageBucket: "health-f41fb.firebasestorage.app",
  messagingSenderId: "329988767376",
  appId: "1:329988767376:web:d93b467f4e21ba21422215",
  measurementId: "G-VJ5X67RQTH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { app, firestore, db, auth, storage };