import express from "express";
import {pullRequest} from "../controllers/notifications/pull-request.js";

export const notifications = express.Router()
    .use('/notifications', [
        express.Router().post('/pull-request', pullRequest)
    ])
