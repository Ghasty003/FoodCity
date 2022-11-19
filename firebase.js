import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-e3pbRDF5mzt457B1_YOwSZtg3xnlBmw",
  authDomain: "food-city-cc1ce.firebaseapp.com",
  projectId: "food-city-cc1ce",
  storageBucket: "food-city-cc1ce.appspot.com",
  messagingSenderId: "411112964227",
  appId: "1:411112964227:web:73dc1070af80fbf396dbb6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
