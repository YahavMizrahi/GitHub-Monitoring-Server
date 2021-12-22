import express from "express";

const app = express();
const port = process.env.port || 3001;

app.get("/", (req, res) => {
  res.send("Pull Request");
});

app.listen(port, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + port + "+++++++++++++++"
  );
});
