import express from "express";
import { notifications } from "./src/routes/notifications.js";
import { error } from "./src/routes/error.js";
import { dbURI } from "./src/services/mongodb.js";
import { mongoose } from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use([notifications, error]);
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
    console.log("connected to DB");
  })
  .catch((err) => console.log("DB - ", err));

// app.listen(PORT, () => {
//   console.log(
//     "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
//   );
// });
