import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu9m6Ht3SuZ9946B_8aTjczpuqUh_3bU4",
  authDomain: "cart-8eb7c.firebaseapp.com",
  projectId: "cart-8eb7c",
  storageBucket: "cart-8eb7c.appspot.com",
  messagingSenderId: "495516854341",
  appId: "1:495516854341:web:d25b1e39cdeb0061919b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
