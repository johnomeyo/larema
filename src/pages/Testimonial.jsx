import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Jema Girson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDNV4kLJb0mio5A_cKv0mwI2CcoaZ8wImLg&s',
    text: 'Had an incredible adventure with Larema Adventure and Trekking! The guides were knowledgeable and friendly, and the scenery was breathtaking',
  },
  {
    name: 'Wayne Rooney',
    image: 'https://norsecraft.co.uk/cdn/shop/files/5.jpg?v=1710172437&width=2000',
    text: 'I had the opportunity to experience Hiking which was an unforgettable highlight of the trip.',
  },
  {
    name: 'Adriana Lima',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oQ1CRy_nzPWhlzGoWwN9EIFVUgSPy5tH3A&s',
    text: 'The entire trip was well-organized and exceeded my expectations. I can\'t wait to book another adventure with them.',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <hr className="testimonial-divider" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
