import express from "express";
import {
  pullRequest,
  getPullRequestData,
} from "../controllers/notifications/pull-request.js";

export const notifications = express
  .Router()
  .use("/notifications", [
    express.Router().post("/pull-request", getPullRequestData),
    express.Router().get("/", pullRequest),
  ]);
