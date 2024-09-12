import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilter setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
};

export default App;
