import { Button } from 'react-bootstrap';
import './herosection.css'; 
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Enchanting Aromas to Light Up Your Moments</h1>
        <button href="#ProductList">Explore</button>
      </div>
    </div>
  );
};

export default HeroSection;