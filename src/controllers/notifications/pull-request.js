const axios = require("axios");
const { database, ref, set } = require("../../services/firebase_db");

const getPullRequestData = async () => {
  return await axios.get(
    "https://api.github.com/repos/YahavMizrahi/DEMO/pulls"
  );
};

const printData = async (req, res) => {
  const data = await getPullRequestData();
  res.send(res.data);
};
const addPullReqToDB = async (pullReq) => {
  // const pullData = {
  // pull_id: pullReq.pull_request.id,
  // number: pullReq.number,
  // title: pullReq.pull_request.title,
  // body: pullReq.pull_request.body,
  // action: pullReq.action,
  // pull_html_url: pullReq.pull_request.html_url,
  // user_name: pullReq.user.login,
  // user_id: pullReq.user.id,
  // created: pullReq.created_at,
  // closed: pullReq.closed_at,
  // avatarUserUrl: pullReq.user.avatar_url,
  // user_html_url: pullReq.user.url,
  // repo_html_url: pullReq.repository.html_url,
  // repoName: pullReq.repository.name,
  // repoId: pullReq.repository.id,
  // };
  try {
    set(
      ref(database, `repo/${pullReq.repository.id}/${pullReq.pull_request.id}`),
      {
        pull_id: pullReq.pull_request.id,
        number: pullReq.number,
        title: pullReq.pull_request.title,
        body: pullReq.pull_request.body,
        action: pullReq.action,
        pull_html_url: pullReq.pull_request.html_url,
        user_name: pullReq.user.login,
        user_id: pullReq.user.id,
        created: pullReq.created_at,
        closed: pullReq.closed_at,
        avatarUserUrl: pullReq.user.avatar_url,
        user_html_url: pullReq.user.url,
        repo_html_url: pullReq.repository.html_url,
        repoName: pullReq.repository.name,
        repoId: pullReq.repository.id,
      }
    );

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
