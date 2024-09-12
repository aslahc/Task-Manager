import { useState } from "react";
import TaskForm from "./components/Task-manager/TaskForm";
import TaskList from "./components/Task-manager/TaskList";
import TaskFilter from "./components/Task-manager/TaskFilter";
import useTaskActions from "./hooks/useTaskActions";

const App = () => {
  const [filter, setFilter] = useState("All");
  const {
    tasks,
    handleAddTask,
    handleDelete,
    handleEdit,
    handleSave,
    handleMarkComplete,
    editingTask,
    editedTaskDetails,
    setEditedTaskDetails,
  } = useTaskActions();

  return (
    <div className="wraper">
      <div className="heading-container">
        <h1 className="heading">Task Manager</h1>
        <div className="filter-container ">
          <TaskFilter setFilter={setFilter} />
        </div>
      </div>

      <TaskForm onTaskAdded={handleAddTask} />

      <TaskList
        tasks={tasks}
        filter={filter}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
        onMarkComplete={handleMarkComplete}
        editingTask={editingTask}
        editedTaskDetails={editedTaskDetails}
        setEditedTaskDetails={setEditedTaskDetails}
      />
    </div>
  );
};

export default App;
