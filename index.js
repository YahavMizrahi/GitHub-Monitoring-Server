// import express from "express";
// import { notifications } from "./src/routes/notifications.js";
// import { error } from "./src/routes/error.js";
const notifications = require('./src/routes/notifications.js')
const error = require('./src/routes/error.js')
const express = require('express')
// import { dbURI } from "./src/services/mongodb.js";
// import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  notifications()
  error()
  next();
});
// app.use([notifications, error]);


// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {
//     app.listen(PORT, () => {
//       console.log(`App listening at http://localhost:${PORT}`);
//     });
//     console.log("connected to DB");
//   })
//   .catch((err) => console.log("DB - ", err));

app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
