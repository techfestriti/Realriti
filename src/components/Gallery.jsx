// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

function Gallery() {
  // Array of image URLs or local paths
  const images = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/2.jpeg',
    'images/3.jpeg'
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <p>Explore photos from our past events and see the vibrant moments captured during various activities.</p>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Event ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
