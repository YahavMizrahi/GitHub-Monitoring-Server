const express = require("express");

const {
  postPullRequest,
  getPullRequest,
} = require("../controllers/notifications/pull-request.js");

const notifications = express
  .Router()
  .use("/notifications", [
    express.Router().get("/pull-requests", getPullRequest),
    express.Router().post("/pull-requests", postPullRequest),
  ]);

module.exports = { notifications };
