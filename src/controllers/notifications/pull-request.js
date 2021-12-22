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

let x;
export const pullRequest = (req, res, next) => {
  if (req.headers["Content-Type"] == "application/json") {
    data = req.json;
    console.log(data);
  }
  console.log("res", res.data);
  x = res.data;
  console.log(x);
  //   printData();
  // res.send("in pullRequest");
  res.end();
};
