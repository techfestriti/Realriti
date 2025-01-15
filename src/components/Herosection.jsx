import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
// import { Link } from 'react-router-dom';

function HeroSection() {
  // Scroll function to the About Us section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <video src="images/main.mp4" autoPlay loop muted />
      <h1 className="playwrite-gb-s-hero-h1">Riti 9.0</h1>
      <h3 className="playwrite-gb-s-hero-h1">Reflect The Radiance</h3>
      <div className="hero-btns">
        {/* About Us Button with scroll functionality */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={scrollToAbout}
          >
          EXPLORE EVENTS
        </Button>

        {/* Events Button linking to the Events page */}
        <Link to="/registration">
        <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large">
            REGISTER NOW 
          </Button>
        </Link>


      </div>
    </div>
  );
}

export default HeroSection;
