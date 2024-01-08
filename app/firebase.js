import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyA8RJx6m8X-D8n6iIPgdg2oWiPei2PRswQ",
  authDomain: "mibiblioteca5.firebaseapp.com",
  projectId: "mibiblioteca5",
  storageBucket: "mibiblioteca5.appspot.com",
  messagingSenderId: "497249679580",
  appId: "1:497249679580:web:4ec493eddaafaa8f961c19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
