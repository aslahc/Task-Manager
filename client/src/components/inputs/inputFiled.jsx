/* eslint-disable react/prop-types */
// TextInput.js
import "./inputstyle.css";

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className="text-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
