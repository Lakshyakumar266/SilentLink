// config/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export services you will use
export const firestore = getFirestore(app);
export const auth = getAuth(app);
