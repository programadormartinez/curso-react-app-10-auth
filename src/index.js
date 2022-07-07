import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB9JIbSoTPYorbifyxpTllGQ89cTTX4CpQ",
  authDomain: "u-pay-shop.firebaseapp.com",
  projectId: "u-pay-shop",
  storageBucket: "u-pay-shop.appspot.com",
  messagingSenderId: "816960840166",
  appId: "1:816960840166:web:0535c34881b444c3bef627"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);