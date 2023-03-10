const express = require("express");
const router = express.Router();

const { getNews } = require("../controllers/newsController");

router.get("/getNews/:source", getNews);

module.exports = router;
