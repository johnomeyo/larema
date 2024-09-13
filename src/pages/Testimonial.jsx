import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Jema Girson',
    image: 'https://images.unsplash.com/photo-1612898887720-9a468670dc68?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Had an incredible adventure with Larema Adventure and Trekking! The guides were knowledgeable and friendly, and the scenery was breathtaking',
  },
  {
    name: 'Wayne Rooney',
    image: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
