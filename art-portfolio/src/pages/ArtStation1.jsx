import Gallery from '../components/Gallery';
import sketch1 from '../assets/sketches/sketch1.jpg';
import sketch2 from '../assets/sketches/sketch2.jpg';
import sketch3 from '../assets/sketches/sketch3.jpg';
import sketch4 from '../assets/sketches/sketch4.jpg';
import sketch5 from '../assets/sketches/sketch5.jpg';
import sketch6 from '../assets/sketches/sketch6.jpg';
import sketch7 from '../assets/sketches/sketch7.jpg';
import sketch8 from '../assets/sketches/sketch8.jpg';


const sketches = [
  { src: sketch1, title: 'Sketch 1' },
  { src: sketch2, title: 'Sketch 2' },
  { src: sketch3, title: 'Sketch 3' },
  { src: sketch4, title: 'Sketch 4' },
  { src: sketch5, title: 'Sketch 5' },
  { src: sketch6, title: 'Sketch 6' },
  { src: sketch7, title: 'Sketch 7' },
  { src: sketch8, title: 'Sketch 8' },
];

const Sketches = () => {
    return (
      <div>
        <Gallery drawings={sketches} />
      </div>
    );
  };

export default Sketches;