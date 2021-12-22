import express from "express";

export const error = express.Router()
    .use('*', [
        (req, res, next) => {
            res.sendStatus(404);
        },
        (err, req, res, next) => {
            res.sendStatus(503);
        }
    ]);
