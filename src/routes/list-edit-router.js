const express = require("express");
const listEditRouter = express.Router();
const taskController = require("../controllers/taskController");
const { isObjectEmpty } = require("../utils/isObjectEmpty");

const emptyBody = (req, res, next) => {
  if (!isObjectEmpty(req.body)) next();
  else
    res
      .status(400)
      .json({ error: "Cuerpo de la solicitud no puede ser vacía" });
};

const validateFieldsBody = (req, res, next) => {
  const { descripcion } = req.body;
  if (req.body.hasOwnProperty("descripcion") && descripcion) next();
  else res.status(400).json({ error: "Campo descripcion es requerido" });
};

listEditRouter.post(
  "/tareas",
  [emptyBody, validateFieldsBody],
  taskController.create
);

listEditRouter.put(
  "/tareas/:id",
  [emptyBody, validateFieldsBody],
  taskController.update
);

listEditRouter.delete("/tareas/:id", taskController.delete);

module.exports = listEditRouter;
