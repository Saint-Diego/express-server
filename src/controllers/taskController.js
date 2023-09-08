const {
  agregar,
  actualizar,
  eliminar,
  listar,
  buscarPorId,
  filtrarPorEstado,
} = require("../model/task");

const taskController = {
  create: async (req, res) => {
    try {
      const msg = await agregar(req.body);
      res.status(201).json({ msg });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const msg = await actualizar(id, req.body);
      res.status(200).json({ msg });
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const msg = await eliminar(id);
      res.status(200).json({ msg });
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  },
  getAll: async (req, res) => {
    try {
      const tareas = await listar();
      res.status(200).json(tareas);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  },
  getByState: async (req, res) => {
    const { state } = req.query;
    let tareas;
    try {
      if (state) tareas = await filtrarPorEstado(state);
      else tareas = await listar();
      res.status(200).json(tareas);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const tarea = await buscarPorId(id);
      res.status(200).json({ tarea });
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  },
};

module.exports = taskController;
