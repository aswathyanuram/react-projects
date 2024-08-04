import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h2>Counter App</h2>
      <button className="btn" onClick={add}>
        +
      </button>
      <div className="num">{count}</div>
      <button className="btn" onClick={sub}>
        -
      </button>
    </div>
  );
}
