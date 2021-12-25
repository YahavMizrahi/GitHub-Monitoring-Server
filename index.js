const { notifications } = require("./src/routes/notifications.js");
const { error } = require("./src/routes/error.js");
const { setup } = require("./src/middlewares/setup.js");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(setup);
app.use([notifications, error]);

app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
