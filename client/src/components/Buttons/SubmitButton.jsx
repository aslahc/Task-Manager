/* eslint-disable react/prop-types */
// SubmitButton.js

import "./buttonStyle.css"; // Import any styles for the button

const SubmitButton = ({ onClick, label }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;
