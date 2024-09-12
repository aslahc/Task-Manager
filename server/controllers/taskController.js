// controllers/taskController.js
// Importing the task model to interact with task data
const taskModel = require("../models/taskModel");

// Controller to handle getting all tasks
const getTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.json(tasks);
};

// Controller to handle creating a new task
const createTask = (req, res) => {
  const { title, priority } = req.body; // Extract title and priority from the request body
  const newTask = {
    id: taskModel.generateToken(), // Generate a unique token for the new task
    title,
    priority,
    status: "In Progress", // Set default status as 'In Progress'
  };
  const task = taskModel.addTask(newTask); // Add the new task to the model
  res.status(201).json(task);
};

// Controller to handle editing an existing task
const editTask = (req, res) => {
  const { id } = req.params;
  const { title, priority, status } = req.body;
  const task = taskModel.findTaskById(id);
  // Check if the task is found and is not completed
  if (task && task.status !== "Completed") {
    const updatedTask = {
      title,
      priority,
      status,
    };
    const result = taskModel.updateTask(id, updatedTask); // Update the task in the model
    res.json(result); // Send the updated task as a response
  } else {
    // Task is completed and cannot be edited
    res
      .status(400)
      .json({ message: "Task is completed and cannot be edited." });
  }
};

// Controller to handle deleting a task

const deleteTask = (req, res) => {
  const { id } = req.params; // Extract the task ID from request parameters
  taskModel.deleteTask(id); // Delete the task from the model
  res.status(204).send(); // Send a 204 status (No Content) to indicate successful deletion
};
// Controller to handle marking a task as complete
const completeTask = (req, res) => {
  const { id } = req.params; // Extract the task ID from request parameters
  const task = taskModel.findTaskById(id); // Find the task by ID
  // If the task exists, update its status to 'Completed'
  if (task) {
    const updatedTask = taskModel.updateTask(id, { status: "Completed" }); // Update task status to 'Completed'
    res.json(updatedTask); // Send the updated task as a response
  } else {
    // Task not found, send a 404 error
    res.status(404).json({ message: "Task not found." });
  }
};
// Exporting all controller functions for use in routes
module.exports = {
  getTasks,
  createTask,
  editTask,
  deleteTask,
  completeTask,
};
