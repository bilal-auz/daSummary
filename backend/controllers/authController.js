const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Incomlete data");
  }

  const userLogin = await User.findOne({ email });

  //add hashing here
  if (userLogin.password == password) {
    res.status(200).send(userLogin);
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { login };
