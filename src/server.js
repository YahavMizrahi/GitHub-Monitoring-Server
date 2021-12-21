import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Pull Request");
});

app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
