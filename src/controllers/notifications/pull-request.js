const axios = require("axios");
const { database, ref, set } = require("../../services/firebase_db");

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
    set(ref(database, `repo/${pullReq.repository.id}`), pullReq);

    // database.ref.child(`repo/${pullReq.repository.id}`).set(pullReq);
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
      console.log("err DB");
      resStatus("404").send();
      return;
    }
    res.send(201);
  });
};

module.exports = { pullRequest, getPullRequestData, printData };
