import React, { useState } from "react";
import "./light.css";
import { TbCircuitSwitchClosed } from "react-icons/tb";
import { TbCircuitSwitchOpen } from "react-icons/tb";
export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="lightContainer">
      {isOn && (
        <div
          className="switch"
          onClick={() => {
            setIsOn(false);
          }}
        >
          <TbCircuitSwitchClosed />
        </div>
      )}
      {!isOn && (
        <div
          className="switch"
          onClick={() => {
            setIsOn(true);
          }}
        >
          <TbCircuitSwitchOpen />
        </div>
      )}

      {isOn && <div className="lightOn">Light On</div>}
      {!isOn && <div className="lightOff">Light Off</div>}
    </div>
  );
}
