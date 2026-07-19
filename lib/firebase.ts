import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo5mULkLOkBgLfoLX5mG6IdqtnJKvgN3Y",
  authDomain: "aixcelerate-78552.firebaseapp.com",
  projectId: "aixcelerate-78552",
  storageBucket: "aixcelerate-78552.firebasestorage.app",
  messagingSenderId: "590501569612",
  appId: "1:590501569612:web:9cd7d56e1fdb0c198f00e9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);