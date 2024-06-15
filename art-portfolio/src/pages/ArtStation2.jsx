import React from 'react';
import DraggableGallery from '../components/Gallery';
import colored1 from '../assets/colored/colored1.jpg';
import colored2 from '../assets/colored/colored2.jpg';
import colored3 from '../assets/colored/colored3.jpg';
import colored4 from '../assets/colored/colored4.jpg';
import colored5 from '../assets/colored/colored5.jpg';
import colored6 from '../assets/colored/colored6.jpg';
import colored7 from '../assets/colored/colored7.jpg';
import colored8 from '../assets/colored/colored8.jpg';
import colored9 from '../assets/colored/colored9.jpg';

const coloredDrawings = [
  { src: colored1, title: 'Colored Drawing 1' },
  { src: colored2, title: 'Colored Drawing 2' },
  { src: colored3, title: 'Colored Drawing 3' },
  { src: colored4, title: 'Colored Drawing 4' },
  { src: colored5, title: 'Colored Drawing 5' },
  { src: colored6, title: 'Colored Drawing 6' },
  { src: colored7, title: 'Colored Drawing 7' },
  { src: colored8, title: 'Colored Drawing 8' },
  { src: colored9, title:'Colored Drawing 9' },
];

const ColoredDrawings = () => {
  return (
    <div>
      <DraggableGallery drawings={coloredDrawings} />
    </div>
  );
};

export default ColoredDrawings;
