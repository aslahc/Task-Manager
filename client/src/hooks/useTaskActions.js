import { useState, useEffect, useCallback } from "react";
import {
  getTasks,
  deleteTask,
  updateTask,
  markTaskComplete,
} from "../api/axios";

// Custom hook for managing task actions
const useTaskActions = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to store the ID of the task currently being edited
  const [editingTask, setEditingTask] = useState(null);
  // State to store the details of the task being edited
  const [editedTaskDetails, setEditedTaskDetails] = useState({
    title: "",
    priority: "Low",
  });

  // Fetch tasks from the API when the component mounts

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(); // Get tasks from the API
        setTasks(data); // Update state with the fetched tasks
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };
    fetchTasks(); // Call the fetch function
  }, []);
  // Handle deleting a task
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  // Handle starting to edit a task
  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditedTaskDetails({
      title: task.title,

      priority: task.priority,
    });
  };

  // Handle saving the edited task
  const handleSave = async (id) => {
    try {
      const updatedTask = await updateTask(id, {
        ...editedTaskDetails,
        status: "In Progress",
      });
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
      setEditingTask(null);
    } catch (error) {
      console.error("Failed to save task", error);
    }
  };
  // Handle marking a task as complete
  const handleMarkComplete = async (id) => {
    try {
      await markTaskComplete(id);
      console.log("enter to complete mark");
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, status: "Completed" } : task
        )
      );
    } catch (error) {
      console.error("Failed to mark task complete", error);
    }
  };
  const handleAddTask = useCallback((newTask) => {
    console.log("---", newTask);

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  return {
    tasks,
    editingTask,
    editedTaskDetails,
    handleDelete,
    handleEdit,
    handleSave,
    handleMarkComplete,
    setEditedTaskDetails,
    handleAddTask,
  };
};

export default useTaskActions;
