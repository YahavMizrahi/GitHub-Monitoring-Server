import mongoose from "mongoose";

export const dbURI =
  "mongodb+srv://Yahav:Ya1Ha2V3@githubmonitoring.jwgwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Schema = mongoose.Schema;
const pullRequestSchema = new Schema({
  pull_id: { type: String, required: true },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  action: { type: String, required: true },
  pull_html_url: { type: String, required: true },
  user_name: { type: String, required: true },
  user_id: { type: String, required: true },
  created: { type: Date, required: true },
  closed: { type: Date, required: false },
  avatarUserUrl: { type: String, required: true },
  user_html_url: { type: String, required: true },
  repo_html_url: { type: String, required: true },
  repoFullName: { type: String, required: true },
});

export const pullReqData = mongoose.model("pullReqData", pullRequestSchema);

export const addToDB = (pullReq) => {
  const pullData = {
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
    repoName: pullReq.repository.id,
  };
  const pullRequest = new pullReqData(pullData);
  pullRequest.save();
};
