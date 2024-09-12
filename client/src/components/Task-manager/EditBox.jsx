/* eslint-disable react/prop-types */
// EditBox.js

const EditBox = ({
  editedTaskDetails,
  setEditedTaskDetails,
  onSave,
  taskId,
}) => {
  return (
    <div className="edit-box">
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

      <button className="save-btn" onClick={() => onSave(taskId)}>
        Save
      </button>
    </div>
  );
};

export default EditBox;
