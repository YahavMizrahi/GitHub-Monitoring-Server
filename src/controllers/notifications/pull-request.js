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
  try {
    await set(
      ref(
        database,
        `repo/${pullReq.repository.id}/pull_requests/${pullReq.pull_request.id}`
      ),
      {
        pull_id: pullReq["pull_request"]["id"],
        number: pullReq["number"],
        title: pullReq["pull_request"]["title"],
        body: pullReq["pull_request"]["body"],
        action: pullReq["action"],
        pull_html_url: pullReq["pull_request"]["html_url"],
        user_name: pullReq["pull_request"]["user"]["login"],
        user_id: pullReq["user.id"],
        created: pullReq["created_at"],
        closed: pullReq["closed_at"],
        avatarUserUrl: pullReq["pull_request"]["user"]["avatar_url"],
        user_html_url: pullReq["pull_request"]["user.url"],
        repo_html_url: pullReq["repository"]["html_url"],
        repoName: pullReq["repository"]["name"],
        repoId: pullReq["repository"]["id"],
      }
    );
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
      res.status("404").send("err DB");
      return;
    }
    res.send(201);
  });
};

module.exports = { pullRequest, getPullRequestData, printData };
