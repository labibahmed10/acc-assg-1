const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connected");
});

app.listen(5000);
