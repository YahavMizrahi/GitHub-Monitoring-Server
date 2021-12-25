const http = require("./http");

const screenshot = async (url) => {
    try {
        const res = await http.get(`https://shot.screenshotapi.net/screenshot?token=6NHFM97-V4NM40T-Q4ANTBQ-S0SP255&url=${url}`);
        return res.data.screenshot;
    } catch (e) {
        console.log(e)
    }

}

module.exports = {screenshot};
