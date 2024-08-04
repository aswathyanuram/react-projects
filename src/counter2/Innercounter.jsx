import React, { useState } from "react";
import "./controlledCounter.css";

export default function Innercounter({ count, add, sub }) {
  const [value, setValue] = useState(1);
  return (
    <div className="counterContainer">
      <h2>Counter App</h2>
      <input
        className="input"
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          add(value);
        }}
      >
        +
      </button>
      <div className="number">{count}</div>
      <button
        className="button"
        onClick={() => {
          sub(value);
        }}
      >
        -
      </button>
    </div>
  );
}
