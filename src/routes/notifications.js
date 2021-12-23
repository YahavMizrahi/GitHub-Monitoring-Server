import express from "express";
import {
  pullRequest,
  getPullRequestData,
  printData,
} from "../controllers/notifications/pull-request.js";

export const notifications = express
  .Router()
  .use("/notifications", [
    express.Router().post("/pull-request", pullRequest),
    express.Router().get("/", "Hello World"),
  ]);
