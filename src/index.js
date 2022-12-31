import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' ;
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-9mAtnq0qrnDk_FNghpARqw7z9uIZDww",
  authDomain: "laubottero.firebaseapp.com",
  projectId: "laubottero",
  storageBucket: "laubottero.appspot.com",
  messagingSenderId: "530066810303",
  appId: "1:530066810303:web:3d8cea54f03528ad636d0a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
