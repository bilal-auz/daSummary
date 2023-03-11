const express = require("express");
const router = express.Router();

const { getHashtags } = require("../controllers/twitterController");

router.get("/getTwitterHashtags", getHashtags);

module.exports = router;
