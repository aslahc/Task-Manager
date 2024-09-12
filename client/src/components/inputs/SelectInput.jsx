/* eslint-disable react/prop-types */
// SelectInput.jsx
const SelectInput = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="select-dropdown">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
};

export default SelectInput;
