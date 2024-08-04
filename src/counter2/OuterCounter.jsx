import React, { useState } from "react";
import "./controlledCounter.css";
import Innercounter from "./Innercounter";

export default function OuterCounter() {
  const [count, setCount] = useState(0);
  const add = (value) => {
    setCount(count + Number(value));
  };
  const sub = (value) => {
    setCount(count - Number(value));
  };
  return (
    <div>
      <Innercounter count={count} add={add} sub={sub} />
    </div>
  );
}
