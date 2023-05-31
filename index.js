const express = require("express");
const app = express();
const importdata = require("./data.json");
let port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/people", (req, res) => {
  res.send(importdata);
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
