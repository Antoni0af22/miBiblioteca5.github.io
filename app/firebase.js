import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCDBgrwLltblT6_xY5gdrjCQRgwWno8GXM",
  authDomain: "mibilioteca3.firebaseapp.com",
  projectId: "mibilioteca3",
  storageBucket: "mibilioteca3.appspot.com",
  messagingSenderId: "791987332781",
  appId: "1:791987332781:web:e1345155eae509f5e0c824"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
