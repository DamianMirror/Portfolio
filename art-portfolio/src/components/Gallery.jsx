import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Drawing from './Drawing';
import ImageModal from './ImageModal';
import './Gallery.css';

const distributeImagesIntoColumns = (images, columns) => {
  const columnsArray = Array.from({ length: columns }, () => []);
  images.forEach((image, index) => {
    columnsArray[index % columns].push(image);
  });
  return columnsArray;
};

const Gallery = ({ drawings }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3); // Default number of columns

  const calculateColumns = (width) => {
    if (width > 1500) return 3;
    if (width > 800) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setColumns(calculateColumns(window.innerWidth));
    };

    handleResize(); // Set initial number of columns
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const openModal = (src, title) => {
    setSelectedImage({ src, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const columnsArray = distributeImagesIntoColumns(drawings, columns);

  return (
    <div className="gallery-container">
      {columnsArray.map((column, colIndex) => (
        <div className="gallery-column" key={colIndex}>
          {column.map(({ src, title }, index) => (
            <Drawing key={index} src={src} title={title} onClick={openModal} />
          ))}
        </div>
      ))}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          title={selectedImage.title}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

Gallery.propTypes = {
  drawings: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
