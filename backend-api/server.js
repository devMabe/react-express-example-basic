const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

let tasks = [
  {
    id: 1,
    description: "Hacer la tarea 1",
    dueDate: "2023-11-15",
    status: "Completado",
  },
  {
    id: 2,
    description: "Revisar el correo",
    dueDate: "2023-11-16",
    status: "Completado",
  },
  {
    id: 3,
    description: "Sacar la basura",
    dueDate: "2023-11-26",
    status: "Pendiente",
  },
  {
    id: 4,
    description: "Organizar la ropa",
    dueDate: "2023-12-08",
    status: "Pendiente",
  },
];

// Rutas
app.get("/tasks", (req, res) => {
  res.json(tasks).status(200);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.filter((item) => item.id === taskId);
  res.json(task).status(200);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.json(newTask).status(200);
});

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  );

  res.json(updatedTask).status(200);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor API REST en http://localhost:${PORT}`);
});
