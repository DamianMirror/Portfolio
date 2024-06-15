import React from 'react';
import DraggableGallery from '../components/Gallery';
import colored1 from '../assets/dark/dark1.jpg';
import colored2 from '../assets/dark/dark2.jpg';
import colored3 from '../assets/dark/dark3.jpg';
import colored4 from '../assets/dark/dark4.jpg';
import colored5 from '../assets/dark/dark5.jpg';
import colored6 from '../assets/dark/dark6.jpg';


const coloredDrawings = [
  { src: colored1, title: 'dark 1' },
  { src: colored2, title: 'dark 2' },
  { src: colored3, title: 'dark 3' },
  { src: colored4, title: 'dark 4' },
  { src: colored5, title: 'dark 5' },
  { src: colored6, title: 'dark 6' },
];

const DarkArt = () => {
  return (
    <div>
      <DraggableGallery drawings={coloredDrawings} />
    </div>
  );
};

export default DarkArt;
