// RoundImage.js
import React from "react";

import classes from "./RoundedImg.module.css";
const RoundImage = ({src, alt, size}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div className={`${classes}["roundImg-container"]`} style={style}>
      <img
        src={`http://localhost:8000/images/${src}`}
        alt={alt}
        className={classes.}
      />
    </div>
  );
};

export default RoundImage;
