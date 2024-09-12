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
  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.priority === filter
  );

  return (
    <div>
      <h2 className="task-list">Task List ({filter})</h2>
      {filteredTasks.map((task) => (
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
      ))}
    </div>
  );
};

export default TaskList;
