const express = require("express");
const router = express.Router();

const { getWeather } = require("../controllers/weatherController");

router.get("/getWeather", getWeather);

module.exports = router;
