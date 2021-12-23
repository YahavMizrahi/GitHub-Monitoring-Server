import axios from "axios";
// import { addToDB } from "../../services/mongodb";

export const getPullRequestData = async () => {
  return await axios.get(
    "https://api.github.com/repos/YahavMizrahi/DEMO/pulls"
  );
};

export const printData = async (req, res) => {
  const data = await getPullRequestData();
  res.send("hi", ...data.data);
};

export const pullRequest = (req, res, next) => {
  const payload = req.body;
  console.log(payload);
  //   addToDB(payload);
  res.send(201);
};
