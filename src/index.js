const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.get("/api", (req, res) => {
  res.send("Api ");
});

app.get("/test", (req, res) => {
  res.send("Test");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
