const weatherRoutes = require("./routes/weatherRoutes");

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

PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port: ", PORT));
