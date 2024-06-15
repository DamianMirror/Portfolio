import React from 'react';
import PropTypes from 'prop-types';
import './Drawing.css';

const Drawing = ({ src, title, onClick }) => {
  return (
    <div className="drawing" onClick={() => onClick(src, title)}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

Drawing.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Drawing;
