const {
  database,
  ref,
  set,
  get,
  child,
} = require("../../services/firebase_db");
const axios = require("axios");
const { async } = require("@firebase/util");

const addPullReqToDB = async (pullReq) => {
  try {
    await set(
      ref(
        database,
        `repo/${pullReq.repository.id}/pull-requests/${pullReq.pull_request.id}`
      ),
      {
        pull_id: pullReq["pull_request"]["id"],
        number: pullReq["number"],
        title: pullReq["pull_request"]["title"],
        body: pullReq["pull_request"]["body"],
        action: pullReq["action"],
        pull_html_url: pullReq["pull_request"]["html_url"],
        user_name: pullReq["pull_request"]["user"]["login"],
        user_id: pullReq["pull_request"]["user"]["id"],
        created: pullReq["pull_request"]["created_at"],
        closed: pullReq["pull_request"]["closed_at"],
        avatarUserUrl: pullReq["pull_request"]["user"]["avatar_url"],
        user_html_url: pullReq["pull_request"]["user"]["html_url"],
        repo_html_url: pullReq["repository"]["html_url"],
        repoName: pullReq["repository"]["name"],
        repo_id: pullReq["repository"]["id"],
        img_pull_url: pullReq["img_pull_url"],
      }
    );
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getPullReqFromDB = (req, res, next) => {
  const dbRef = ref(database);
  get(child(dbRef, `repo/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const snap = snapshot.val();
        res.send(JSON.stringify(snap));
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

const pullRequest = (req, res, next) => {
  const getImgPull = async (url) => {
    return await // screenshot_api.
    axios
      .get(
        `https://shot.screenshotapi.net/screenshot?token=6NHFM97-V4NM40T-Q4ANTBQ-S0SP255=${url}`
      )
      .then(async (res) => {
        return await res.data.screenshot;
      });
  };
  let payload = req.body;
  // getImgPull(payload["pull_request"]["html_url"]).then((res) => {
  //   res.send(201)
  //   payload = { ...payload, img_pull_url: res.data.screenshot };
  // }).catch((err) => {
  //       res.status("404").send("err DB");
  //     });

  const getPayload = async () => {
    return await {
      ...req.body,
      img_pull_url: getImgPull(req.body["pull_request"]["html_url"]),
    };
  };

  // getImgPull(payload["pull_request"]["html_url"]).then((res) => {
  //   addPullReqToDB({ ...payload, img_pull_url: res.data.screenshot }).then(
  //     (response) => {
  //       if (!response) {
  //         res.status("404").send("err DB");
  //         return;
  //       }
  //       res.send(201);
  //     }
  //   );
  // });

  await Promise.all([getPayload(), addPullReqToDB(payload)]);
};;;



module.exports = { pullRequest, getPullReqFromDB };
