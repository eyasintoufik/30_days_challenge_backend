require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
  res.send("twiter url");
});

app.get("/login", (req, res) => {
  res.send("<h1>login page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>youtube page</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
