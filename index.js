import express from "express";
import { notifications } from "./src/routes/notifications.js";
import { error } from "./src/routes/error.js";

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json);

app.use([notifications, error]);

app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
