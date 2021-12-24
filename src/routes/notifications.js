const express = require("express");

const {
  pullRequest,
  getPullReqFromDB,
} = require("../controllers/notifications/pull-request.js");

const notifications = express
  .Router()
  .use("/notifications", [
    express.Router().get("/pull-requests1", getPullReqFromDB),
    express.Router().post("/pull-request", pullRequest),
  ]);

module.exports = { notifications };
