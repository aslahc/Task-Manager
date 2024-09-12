/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  filter,
  onDelete,
  onEdit,
  onSave,
  onMarkComplete,
  editingTask,
  editedTaskDetails,
  setEditedTaskDetails,
}) => {
  // Filter tasks based on priority or completed status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status === "Completed"; // Show only completed tasks
    return task.priority === filter;
  });

  return (
    <div>
      <h2 className="task-list">Task List ({filter})</h2>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onSave={onSave}
            onMarkComplete={onMarkComplete}
            isEditing={editingTask === task.id}
            editedTaskDetails={editedTaskDetails}
            setEditedTaskDetails={setEditedTaskDetails}
          />
        ))
      ) : (
        <p>No tasks to show.</p>
      )}
    </div>
  );
};

export default TaskList;
