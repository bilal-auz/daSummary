const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    nick_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [
      {
        text: { type: String, required: true },
        checked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
