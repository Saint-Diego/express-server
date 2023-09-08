const express = require("express");
const taskController = require("../controllers/taskController");
const listViewRouter = express.Router();

listViewRouter.get("/tareas", taskController.getByState);

module.exports = listViewRouter;
