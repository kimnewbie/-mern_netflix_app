import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6-1Sib-V77r1FucDCieQvWbku3cS-lv8",
  authDomain: "react-netflix-clone-11124.firebaseapp.com",
  projectId: "react-netflix-clone-11124",
  storageBucket: "react-netflix-clone-11124.appspot.com",
  messagingSenderId: "437047162033",
  appId: "1:437047162033:web:f6f68cd69d66803f791e90",
  measurementId: "G-3MWKMG63D5"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);