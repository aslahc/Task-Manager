let tasks = []; // In-memory storage for tasks, acting as a database substitute

// Function to generate a unique token for each task using the current timestamp
const generateToken = () => Date.now().toString();

// Function to get all tasks from the in-memory tasks array
const getAllTasks = () => tasks;

// Function to add a new task to the in-memory storage
const addTask = (task) => {
  tasks.push(task); // Push the new task into the tasks array
  return task; // Return the added task
};

// Function to find a task by its ID
const findTaskById = (id) => tasks.find((task) => task.id === id);

// Function to update an existing task by its ID
const updateTask = (id, updatedTask) => {
  const taskIndex = tasks.findIndex((task) => task.id === id); // Find the index of the task
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }; // Merge the current task with updated data
    return tasks[taskIndex]; // Return the updated task
  }
  return null; // Return null if the task isn't found
};

// Function to delete a task by its ID
const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id); // Remove the task from the tasks array
};

// Exporting all model functions to be used in other parts of the application
module.exports = {
  generateToken,
  getAllTasks,
  addTask,
  findTaskById,
  updateTask,
  deleteTask,
};
