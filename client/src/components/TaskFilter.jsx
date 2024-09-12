/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

const TaskFilter = ({ setFilter }) => {
  return (
    <div>
      <h2>Filter Tasks</h2>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("High")}>High</button>
      <button onClick={() => setFilter("Medium")}>Medium</button>
      <button onClick={() => setFilter("Low")}>Low</button>
    </div>
  );
};

export default TaskFilter;
