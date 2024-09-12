// Importing required modules
const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

// CRUD routes
// Route to get all tasks
router.get("/tasks", taskController.getTasks);

// Route to create a new task
router.post("/tasks", taskController.createTask);

// Route to edit an existing task by ID
router.put("/tasks/:id", taskController.editTask);

// Route to delete a task by ID
router.delete("/tasks/:id", taskController.deleteTask);

// Route to mark a task as complete by ID
router.put("/tasks/:id/complete", taskController.completeTask);

// Exporting the router to be used in other parts of the app
module.exports = router;
