import React, { useState } from "react";
import "./inputs.css";

export default function Inputs() {
  const [value, setValue] = useState("Welcome!");
  return (
    <div className="inputContainer">
      <h2>Inputs</h2>
      <input
        className="inputText"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="text">{value}</div>
    </div>
  );
}
