import React from "react";
import "./images.css";

export default function MultipleImages({ clickedImage, images }) {
  return (
    <div className="multipleImages">
      {images.map((image) => {
        return (
          <div
            style={{
              background: `url(${image.url})`,
              width: "180px",
              height: "100px",
              margin: ".25rem",
              backgroundSize: "cover",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => {
              clickedImage(image);
            }}
          ></div>
        );
      })}
    </div>
  );
}
