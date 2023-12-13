const express = require("express");
const listViewRouter = express.Router();
const taskController = require("../controllers/taskController");
const { isObjectEmpty } = require("../utils/isObjectEmpty");

const filters = ["completado", "pendiente"];

const emptyParams = (req, res, next) => {
  if (!isObjectEmpty(req.query)) {
    next();
  } else {
    res.status(400).json({ error: "Debe enviar un parámetro" });
  }
};

const validateParams = (req, res, next) => {
  const { state } = req.query;
  if (filters.includes(state)) {
    next();
  } else {
    res.status(400).json({ error: "Parámetro no válido" });
  }
};

listViewRouter.get("/tareas", [emptyParams, validateParams], taskController.getByState);

module.exports = listViewRouter;
