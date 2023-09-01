const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
