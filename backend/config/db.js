const mongoose = require("mongoose");

const connect_DB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_LOCAL_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database CONNECTED.");
  } catch (error) {
    console.log("ERROR CONNECTING DATABASE");
    process.exit();
  }
};

module.exports = connect_DB;
