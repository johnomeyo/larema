import React from 'react';
import './Destinations.css'; // Importing the CSS file
import CardScroll from '../components/CardScroll';
import PricingPlans from '../components/TourPackages';

const Destinations = () => {
  return (
<>
<div className="destinations-container">
      <div className="question-container">
        <h1>What is the role of adventure in life?</h1>
      </div>
      <div className="description-container">
        <p>
          Adventure is the driving force that pushes individuals beyond their comfort zones.
          It opens up new perspectives, builds resilience, and creates unforgettable experiences.
          Whether exploring untouched landscapes or trying daring activities, adventure is about 
          embracing the unknown and expanding horizons.
        </p>
      </div>
    
    </div>
    <CardScroll/>
    <PricingPlans/>
</>
  );
};

export default Destinations;
