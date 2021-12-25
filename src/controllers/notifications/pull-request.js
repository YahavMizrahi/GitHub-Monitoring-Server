const {
  getDocument,
  addItemToDocument,
} = require("../../services/firebase_db");
const { screenshot } = require("../../services/util");

const getPullRequest = async (req, res) => {
  const pulls = await getDocument("repo");
  console.log(123, pulls);
  if (pulls) {
    res.send(pulls);
  }
  res.send(404);
};

const postPullRequest = async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const { success, message } = await addPullReqToDB(payload);
    if (!success) throw message || "Error adding pull request to DB";
    res.send(201);
  } catch (e) {
    console.log(e);
    res.status(503);
  }
};

const addPullReqToDB = async (pullReq) => {
  try {
    const parsedPullReq = await parsePullRequest(pullReq);
    const { repo_id, pull_id } = parsedPullReq;
    const isAdded = await addItemToDocument(
      `repo/${repo_id}/pull-requests/${pull_id}`,
      parsedPullReq
    );

    return { success: isAdded };
  } catch (e) {
    console.log(e);
    return { message: e.message };
  }
};

const parsePullRequest = async (pullReq) => {
  const { repository = {}, pull_request = {}, number, action } = pullReq;
  const pull_screen = await screenshot(pull_request["html_url"]);

  return {
    pull_screen,
    pull_id: pull_request["id"],
    number,
    title: pull_request["title"],
    body: pull_request["body"],
    action,
    pull_html_url: pull_request["html_url"],
    user_name: pull_request["user"]["login"],
    user_id: pull_request["user"]["id"],
    created: pull_request["created_at"],
    closed: pull_request["closed_at"],
    avatarUserUrl: pull_request["user"]["avatar_url"],
    user_html_url: pull_request["user"]["html_url"],
    repo_html_url: repository["html_url"],
    repoName: repository["name"],
    repo_id: repository["id"],
  };
};

module.exports = { postPullRequest, getPullRequest };
