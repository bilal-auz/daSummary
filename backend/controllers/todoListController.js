const User = require("../models/userModel");

const updateList = async (req, res) => {
  const { username, tasks } = req.body;

  if (!username && !tasks) return res.status(400).send("Incompleted");

  const user = await User.findOneAndUpdate({ username }, { tasks });

  res.status(200).send(user);
};

module.exports = { updateList };
