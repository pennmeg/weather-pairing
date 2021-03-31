const express = require("express");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const params = {
  access_key: process.env.WEATHER_API_KEY,
  query: "New York",
};

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/weather", (req, res) => {
  axios
    .get("http://api.weatherstack.com/forecast", { params })
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
