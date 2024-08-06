import React from "react";
import "./images.css";

export default function SelectedImage({ selectedImage }) {
  return (
    <div
      className="selectedImage"
      style={{
        background: `url(${selectedImage?.url})`,
        width: "600px",
        height: "200px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
