import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import Sketches from './pages/ArtStation1';
import ColoredDrawings from './pages/ArtStation2';
import DarkArt from './pages/ArtStation3'; // Import the new component
import './App.css';
import './AdaptiveStyle.css';
import myPhoto from './assets/myPhoto.jpg'; // Update with the correct path to your photo
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import emailIcon from './assets/icons/email.svg';
import phoneIcon from './assets/icons/phone.svg';

function App() {
  const [emailText, setEmailText] = useState('dematchuma2017@gmail.com');
  const [phoneText, setPhoneText] = useState('098-956-73-03');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard!`);
    }, () => {
      alert('Failed to copy text.');
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setEmailText('email');
        setPhoneText('phone');
      } else {
        setEmailText('dematchuma2017@gmail.com');
        setPhoneText('098-956-73-03');
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const NavigatorButtons = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <div className="nav-links">
        <ul>
          <li>
            <button 
              onClick={() => navigate('/')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Album I
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/colored-drawings')}
              className={location.pathname === '/colored-drawings' ? 'active' : ''}
            >
              Album II
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/dark-art')}
              className={location.pathname === '/dark-art' ? 'active' : ''}
            >
              Album III
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="container">
        <div className="navigator">
          <div className="info">
            <img src={myPhoto} alt="My Photo" />
            <h2>Damian</h2>
            <p>Young artist from Ukraine</p>
          </div>
          <NavigatorButtons />
          <div className="contact-links">
            <div className="contact-link">
              <img src={githubIcon} alt="GitHub" />
              <a href="https://github.com/DamianMirror" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-link">
              <img src={linkedinIcon} alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/damian-chumachenko-75146430b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-link" onClick={() => copyToClipboard("098-956-73-03")}>
              <img src={phoneIcon} alt="Phone" />
              <a data-phone="098-956-73-03">{phoneText}</a>
            </div>
            <div className="contact-link" onClick={() => copyToClipboard("dematchuma2017@gmail.com")}>
              <img src={emailIcon} alt="Email" />
              <a data-email="dematchuma2017@gmail.com">{emailText}</a>
            </div>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Sketches />} />
            <Route path="/sketches" element={<Sketches />} />
            <Route path="/colored-drawings" element={<ColoredDrawings />} />
            <Route path="/dark-art" element={<DarkArt />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
