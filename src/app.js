require("dotenv").config();
const express = require("express");
const app = express();
const listViewRouter = require("./routes/list-view-router");
const listEditRouter = require("./routes/list-edit-router");

app.use(express.json());
app.use([listViewRouter, listEditRouter]);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

module.exports = app;
