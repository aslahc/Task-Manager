const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let tasks = []; // In-memory storage for tasks

// Generate unique token (using timestamp)
const generateToken = () => Date.now().toString();

// CRUD routes (create, read, update, delete)

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title, description, priority } = req.body;
  const newTask = {
    id: generateToken(),
    title,
    description,
    priority,
    status: "In Progress",
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Edit task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, priority, status } = req.body;
  const task = tasks.find((task) => task.id === id);

  if (task && task.status !== "Completed") {
    task.title = title;
    task.description = description;
    task.priority = priority;
    task.status = status;
    res.json(task);
  } else {
    res
      .status(400)
      .json({ message: "Task is completed and cannot be edited." });
  }
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== id);
  res.status(204).send();
});

// Mark task as completed (lock editing)
app.patch("/tasks/:id/complete", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.status = "Completed";
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
