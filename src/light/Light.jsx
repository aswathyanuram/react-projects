import React from "react";
import "./light.css";
import Switch from "./Switch";

export default function Light() {
  return (
    <div className="lightContainer">
      <h2>Light On and Off</h2>
      <Switch />
    </div>
  );
}
