import React from "react";
import "./dashboard.css";

export default function Content({ selectedTitle }) {
  return <div className="content">{selectedTitle?.app}</div>;
}
