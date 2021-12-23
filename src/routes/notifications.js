const express = require('express')
// import {
//   pullRequest,
//   getPullRequestData,
//   printData,
// } from "../controllers/notifications/pull-request.js";

const { pullRequest, getPullRequestData, printData } = require('../controllers/notifications/pull-request.js')

const notifications = express
  .Router()
  .use("/notifications", [
    express.Router().post("/pull-request", pullRequest),
    express.Router().get("/", printData),
  ]);

module.exports = { notifications }