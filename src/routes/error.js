// import express from "express";
const express = require('express')

const error = express.Router()
    .use('*', [
        (req, res, next) => {
            res.sendStatus(404);
        },
        (err, req, res, next) => {
            res.sendStatus(503);
        }
    ]);

module.exports = { error }