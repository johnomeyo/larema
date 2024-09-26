import React from 'react';
import './TourPackages.css';

const plans = [
  {
    name: 'Standard',
    price: '$1,199',
    duration: '/mo',
    description: 'Free plan for all users.',
    features: ['Guided trekking or hiking', 'Basic camping equipment', 'Shared accommodation', 'Transportation','Meals'],
    buttonText: 'Get Standard',
    className: 'basic-plan',
  },
  {
    name: 'Luxury',
    price: '$4,200',
    duration: '/mo',
    description: 'Ideal for small businesses.',
    features: ['Guided trekking or hiking', 'High-quality camping equipment', 'Private accommodation', 'Gourmet meals', 'Aditional Activities'],
    buttonText: 'Get Luxury',
    className: 'business-plan',
  },
  {
    name: 'Custom',
    price: '$8,700',
    duration: '/mo',
    description: 'Works best for enterprise companies.',
    features: [ 'Tailored itinerary planning', 'Flexible accommodation options', 'Specialized equipment rental', 'Private transportation', 'Cultural experiences'],
    buttonText: 'Get Custom',
    className: 'enterprise-plan',
  },
];

const PlanCard = ({ name, price, duration, description, features, buttonText, className }) => (
  <div className={`plan ${className}`}>
    <h3>{name}</h3>
    <div className="price">
      <span>{price}</span>
      <span>{duration}</span>
    </div>
    <p>{description}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button>{buttonText}</button>
  </div>
);

function PricingPlans() {
  return (
    <section className="pricing-plans">
      <h2>Pricing Plans</h2>
      <p>Trekking Pro or just starting your journey? We got the right plan for you.</p>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}

export default PricingPlans;
