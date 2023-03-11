const dotenv = require("dotenv");
dotenv.config();

const weatherRoutes = require("./routes/weatherRoutes");
const newsRoutes = require("./routes/newsRoutes");
const twitterRoutes = require("./routes/twitterRoutes");

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api", (req, res) => {
  res.send("API is Running");
});

app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/twitter", twitterRoutes);

PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port: ", PORT));
