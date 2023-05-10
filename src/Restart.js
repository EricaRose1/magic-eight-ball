import React from "react";
import "./Restart.css"

function ResetButton({ handleReset }) {
  return (
    <button onClick={handleReset}>New Question</button>
  );
}

export default ResetButton;