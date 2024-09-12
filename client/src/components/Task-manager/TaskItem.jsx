/* eslint-disable react/prop-types */
import "./taskstyle.css";

const TaskItem = ({
  task,
  onDelete,
  onEdit,
  onSave,
  onMarkComplete,
  isEditing,
  editedTaskDetails,
  setEditedTaskDetails,
}) => {
  // Define a function to get the color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "#e2c104";
      case "Medium":
        return "orange";
      case "High":
        return "red";
      default:
        return "black"; // default color if priority is not recognized
    }
  };

  console.log("6^^^", task);

  if (isEditing) {
    return (
      <div className="task">
        <input
          className="text-input"
          value={editedTaskDetails.title}
          onChange={(e) =>
            setEditedTaskDetails({
              ...editedTaskDetails,
              title: e.target.value,
            })
          }
        />

        <select
          className="select-dropdown"
          value={editedTaskDetails.priority}
          onChange={(e) =>
            setEditedTaskDetails({
              ...editedTaskDetails,
              priority: e.target.value,
            })
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className="save-btn" onClick={() => onSave(task.id)}>
          Save
        </button>
      </div>
    );
  }

  return (
    <div className="task">
      <div className="task-info">
        <input type="checkbox" onChange={() => onMarkComplete(task.id)} />
        <h3 className={task.status == "Completed" ? "completed-task" : ""}>
          {task.title}
        </h3>
      </div>
      <div className="task-time">
        <span>{task.time}</span>
      </div>
      <div className="  ority">
        {/* Apply the dynamic color to the priority */}
        <span style={{ color: getPriorityColor(task.priority) }}>
          {task.priority}
        </span>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
