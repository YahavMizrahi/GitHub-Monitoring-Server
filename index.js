const { notifications } = require("./src/routes/notifications.js");
const { error } = require("./src/routes/error.js");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  const allowedOrigins = "http://localhost:3000";
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
  return "asd";
});

app.use([notifications, error]);



app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
