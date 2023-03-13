const User = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("Incompleted data");
  }

  const userLogin = await User.findOne({ username });

  //add hashing here
  if (userLogin && userLogin.password == password) {
    res.status(200).send(userLogin);
  } else {
    res.status(401).send("Unauthorized");
  }
};

const register = async (req, res) => {
  const { username, password, tasks } = req.body;

  if ((!username, !password)) res.status(400).send("Incompleted Data");

  const checkUser = await User.findOne({ username });

  if (checkUser) res.status(406).send("Username taken");

  const newUser = await User.create({
    username,
    password,
    tasks,
  });

  if (newUser) {
    console.log("User Add");
    res.status(201).json({ newUser });
  } else {
    res.status(400).send("ERRO CREATING USER");
  }
};

module.exports = { login, register };
