const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("Helloo ");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
