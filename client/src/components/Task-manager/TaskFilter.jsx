/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import "./taskstyle.css";

const TaskFilter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="task-filter">
      <select onChange={handleChange} className="filter-select">
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default TaskFilter;
