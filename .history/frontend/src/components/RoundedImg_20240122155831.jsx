// RoundImage.js
import React from "react";

import classes from "./RoundedImg.module.css";
const RoundImage = ({src, alt, size}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div className={`${classes}["round-image-container"]`} style={style}>
      <img
        src={`http://localhost:8000/images/${src}`}
        alt={alt}
        className="round-image"
      />
    </div>
  );
};

export default RoundImage;
