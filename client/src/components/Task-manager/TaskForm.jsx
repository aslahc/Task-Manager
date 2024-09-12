/* eslint-disable react/prop-types */
// TaskForm.js

import { useState } from "react";
import { addTask } from "../../api/axios";
import TextInput from "../inputs/inputFiled"; // Import the TextInput component
import SelectInput from "../inputs/SelectInput";
import SubmitButton from "../Buttons/SubmitButton";
import "./taskstyle.css";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState(""); // State to store error message

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Task title cannot be empty"); // Set error message

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);

      return; // Stop form submission if validation fails
    }

    try {
      const newTask = await addTask({ title, priority });
      onTaskAdded(newTask);

      // Clear form fields after successful addition
      setTitle("");
      setPriority("Low");
      setError(""); // Clear error after successful submission
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <div className="task-form-container">
        <TextInput
          placeholder="Add your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <SelectInput
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <SubmitButton onClick={handleAddTask} label="Add Task" />
      {error && <p className="error-message">{error}</p>} {/* Display error */}
    </div>
  );
};

export default TaskForm;
