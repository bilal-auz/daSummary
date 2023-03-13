const express = require("express");
const router = express.Router();

const { updateList } = require("../controllers/todoListController");

router.put("/update-tasks", updateList);

module.exports = router;
