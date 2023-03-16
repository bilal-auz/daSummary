const axios = require("axios");
// const https = require("https");
const fetch = require("node-fetch");

const API_ENDPOINT = "https://twitter-trends.vercel.app/api/trends";

const getHashtags = async (req, res) => {
  try {
    console.log(req);

    if (!req.body.woeid) return res.status(400).send("Incompleted");

    //Default trend: WorldWide trend. NOTE: change later depending to the user loctions
    const woied = req.body.woeid ? req.body.woeid : 23424757;

    const config = {
      headers: {
        "Content-type": "application/json",
        // "Content-Length": "19",
        Host: "https://twitter-trends.vercel.app",
        // origin: "https://twitter-trends.vercel.app",
      },
    };

    const BODY_PARAMS = { woied: woied };

    const { data } = await axios.post(API_ENDPOINT, { woied }, config);

    res.status(200).send(data);
  } catch (error) {
    console.log("ERROR: " + error);
    res.status(404).send(error);
  }
};

module.exports = { getHashtags };
