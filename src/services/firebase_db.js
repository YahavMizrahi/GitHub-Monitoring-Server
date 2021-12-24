const firebase = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

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

const app = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const database = getDatabase();

module.exports = { database, ref, set };
