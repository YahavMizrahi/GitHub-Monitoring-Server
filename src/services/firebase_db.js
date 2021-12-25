const firebase = require("firebase/app");
const { getDatabase, ref, set, get, child } = require("firebase/database");

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

const getDocument = async (documentName) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `${documentName}/`));

    if (snapshot.exists()) {
      const snap = snapshot.val();
      return JSON.stringify(snap);
    } else {
      console.log("No data available");
    }
  } catch (e) {
    return e;
  }
};

const addItemToDocument = async (refUrl, item) => {
  try {
    const fbRef = ref(database, refUrl);

    await set(fbRef, item);
    return true;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getDocument, addItemToDocument };
