//config varibales
const dotenv = require("dotenv");
dotenv.config();

//importing routes
const weatherRoutes = require("./routes/weatherRoutes");
const newsRoutes = require("./routes/newsRoutes");
const twitterRoutes = require("./routes/twitterRoutes");
const authRoutes = require("./routes/authRoutes");

//DB connecting
const connect_DB = require("./config/db");
connect_DB();

//init the express server
const express = require("express");
const app = express();
app.use(express.json()); //send/read requests in json format

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api", (req, res) => {
  res.send("API is Running");
});

app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/twitter", twitterRoutes);
app.use("/api/auth", authRoutes);

PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port: ", PORT));
