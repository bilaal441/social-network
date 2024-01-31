// RoundImage.js
import React from 'react';
import PropTypes from 'prop-types';
import './RoundImage.css'; // Import the CSS file for styling

const RoundImage = ({ src, alt, size }) => {
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

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
};

RoundImage.defaultProps = {
  size: '100px', // You can set a default size if none is provided
};

export default RoundImage;
