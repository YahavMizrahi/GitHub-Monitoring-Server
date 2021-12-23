// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNqcNEJyAQ6Qh9BUEWEfvIuGIvqk4fMyY",
  authDomain: "github-monitoring.firebaseapp.com",
  databaseURL: "https://github-monitoring-default-rtdb.firebaseio.com",
  projectId: "github-monitoring",
  storageBucket: "github-monitoring.appspot.com",
  messagingSenderId: "657578439656",
  appId: "1:657578439656:web:67267773b00ab2fb90aa5d",
  measurementId: "G-BLYV8S82FK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// enter to DB
const database = firebase.database();
const storageRef = firebase.storage().ref();

export const addPullReqToDB = async (pullReq) => {
  try {
    database.ref(`repoes/${pullReq.repository.id}`).set(pullReq);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};
