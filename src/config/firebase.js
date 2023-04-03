// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDQgiz2je0C6AqCOWeuTlHri3mqFHey3kM",
  authDomain: "tiktok---jornada-df400.firebaseapp.com",
  projectId: "tiktok---jornada-df400",
  storageBucket: "tiktok---jornada-df400.appspot.com",
  messagingSenderId: "892921273833",
  appId: "1:892921273833:web:eaaf439cd1a95e01873f78",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
