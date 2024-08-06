import React from "react";
import "./dashboard.css";

export default function Sidebar({ details, changeApp }) {
  return (
    <div className="sidebar">
      {details.map((detail) => {
        return (
          <div
            className="tabName"
            key={detail.id}
            onClick={() => {
              changeApp(detail);
            }}
          >
            {detail?.title}
          </div>
        );
      })}
    </div>
  );
}
