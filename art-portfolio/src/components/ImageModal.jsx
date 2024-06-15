import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ImageModal.css';

const ImageModal = ({ src, title, onClose }) => {
    
    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img src={src} alt={title} />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
