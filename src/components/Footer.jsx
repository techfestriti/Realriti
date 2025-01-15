import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      {/* Navigation Links */}
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
        </div>
        <div className="footer-column">
          <p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              KL Tower <br />
              Mala Vazhi <br />
              Junction Above KSFE <br />
              Aloor Thrissur, 680683
            </a>
          </p>
        </div>
        <div className="footer-column">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Email Us
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Map">
            <i className="fas fa-map"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
