const axios = require("axios");
const axiosClient = axios.create();

const get = async (url) => {
    return await axiosClient.get(url);
}

module.exports = {get};
