import axios from "axios";

// Base URL for the API
const API_BASE_URL = "http://localhost:5000";

// Creating an axios instance with a predefined base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to add a new task
export const addTask = async (taskData) => {
  try {
    console.log("new task adding"); // Log message for debugging
    const response = await api.post("/tasks", taskData); // Send POST request to add task
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Function to get all tasks
export const getTasks = async () => {
  try {
    const response = await api.get("/tasks"); // Send GET request to fetch tasks
    return response.data; // Return the response data (the list of tasks)
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Function to delete a task by ID
export const deleteTask = async (id) => {
  try {
    await api.delete(`/tasks/${id}`); // Send DELETE request to remove the task
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

// Function to update a task by ID
export const updateTask = async (id, taskData) => {
  try {
    const response = await api.put(`/tasks/${id}`, taskData); // Send PUT request to update the task
    return response.data; // Return the response data (the updated task)
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Function to mark a task as complete by ID
export const markTaskComplete = async (id) => {
  try {
    console.log("going to server"); // Log message for debugging
    await api.put(`/tasks/${id}/complete`); // Send PUT request to mark the task as complete
  } catch (error) {
    console.error("Error marking task complete:", error);
    throw error;
  }
};

// Exporting the axios instance as default export
export default api;
