const express = require("express");
const setup = [
    express.json(),
    express.urlencoded({ extended: true }),
    (req, res, next) => {
      // const allowedOrigins = "http://localhost:3000";
      //   const allowedOrigins = "https://github-monitoring-client.herokuapp.com/";
      const allowedOrigins = "*";
      const origin = req.headers.origin;
      if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
      }
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    }
];

module.exports = {setup};
