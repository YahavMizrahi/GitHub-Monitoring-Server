import axios from "axios";

export const getPullRequestData = async () => {
  return await axios.get(
    "https://api.github.com/repos/YahavMizrahi/DEMO/pulls"
  );
};

export const printData = async (req, res) => {
  const data = await getPullRequestData();

  //   console.log(...data.data);
  res.send(...data.data);
};

export const pullRequest = (req, res, next) => {
  //   console.log("res", req.data);
  const payload = req.body;
  console.log(req.body);

  //   printData();
  res.send(201);
};
