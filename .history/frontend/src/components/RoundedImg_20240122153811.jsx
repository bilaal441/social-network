// RoundImage.js
import React from "react";

import "./RoundImage.css"; // Import the CSS file for styling

const RoundImage = ({src, alt, size}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="round-image-container" style={style}>
      <img src={src} alt={alt} className="round-image" />
    </div>
  );
};

export default RoundImage;
