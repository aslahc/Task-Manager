/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = ({ filter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.priority === filter
  );

  return (
    <div>
      <h2>Task List ({filter})</h2>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => markAsComplete(task.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

const markAsComplete = (id) => {
  axios
    .patch(`http://localhost:5000/tasks/${id}/complete`)
    .then(() => window.location.reload())
    .catch((error) => console.log(error));
};

export default TaskList;
