const express = require("express");
const router = express.Router();

const { getHashtags } = require("../controllers/twitterController");

router.post("/getTwitterHashtags", getHashtags);

module.exports = router;
