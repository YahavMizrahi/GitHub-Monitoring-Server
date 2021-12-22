import express from "express";
import GithubWebhook from "express-github-webhook";
import {
  pullRequest,
  getPullRequestData,
} from "../controllers/notifications/pull-request.js";

const webhookHandler = new GithubWebhook({
  events: ["pull"], // Events to listen for (optional, since you can select them on Github as well - set to * to handle all events)
  secret: "SuperSecretSecret", // Set this to verify the request against the secret provided to github
});

export const notifications = express
  .Router()
  .use("/notifications", [
    express
      .Router()
      .post("/pull-request", webhookHandler.middleware, getPullRequestData),
    express.Router().get("/", pullRequest),
  ]);
