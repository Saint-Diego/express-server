const express = require("express");
const taskController = require("../controllers/taskController");
const listEditRouter = express.Router();

listEditRouter.post("/tareas", taskController.create);

listEditRouter
  .route("/tareas/:id")
  .put(taskController.update)
  .delete(taskController.delete);

module.exports = listEditRouter;
