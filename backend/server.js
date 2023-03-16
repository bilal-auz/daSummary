//config varibales
const dotenv = require("dotenv");
dotenv.config();

//importing routes
const weatherRoutes = require("./routes/weatherRoutes");
const newsRoutes = require("./routes/newsRoutes");
const twitterRoutes = require("./routes/twitterRoutes");
const authRoutes = require("./routes/authRoutes");
const todoListRoutes = require("./routes/todoListRoutes");

//DB connecting
const connect_DB = require("./config/db");
connect_DB();

//init the express server
const express = require("express");
const app = express();
app.use(express.json()); //send/read requests in json format
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

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
app.use("/api/todo-list", todoListRoutes);

PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port: ", PORT));
