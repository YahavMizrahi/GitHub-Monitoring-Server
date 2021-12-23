// import axios from "ax÷ios";
const axios = require("axios")
// import { addToDB } from "../../services/mongodb";
// const { addPullReqToDB } = require("./firebase/config");
const { firebase } = require('../../services/firebase_db')
const getPullRequestData = async () => {
  return await axios.get(
    "https://api.github.com/repos/YahavMizrahi/DEMO/pulls"
  );
};

const printData = async (req, res) => {
  const data = await getPullRequestData();
  res.send("hi", ...data.data);
};
const addPullReqToDB = async (pullReq) => {
  try {
    firebase.ref(`repoes/${pullReq.repository.id}`).set(pullReq);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const pullRequest = (req, res, next) => {
  const payload = req.body;
  console.log(payload);
  addPullReqToDB(payload).then((response) => {
    if (!response) {
      resStatus("404").send();
      return;
    }
    res.send(201);
  });
};

module.exports = { pullRequest, getPullRequestData, printData }