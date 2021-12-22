import axios from "axios";

export const getPullRequestData = async () => {
  return await axios.get(
    "https://api.github.com/repos/YahavMizrahi/DEMO/pulls"
  );
};

export const printData = async () => {
  const data = await getPullRequestData();
  console.log(...data.data);
};

export const pullRequest = (req, res, next) => {
  console.log("res", res.data);
  printData();
  res.send("in pullRequest");
};
