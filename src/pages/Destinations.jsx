import React from 'react';
import Slider from 'react-slick';
import './Destinations.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Destinations = () => {
    const images = [
        { id: 1, url: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',description:"Damn" },
        { id: 2, url: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',description:"The quick brown fix jumped over the lazy dogs"},
        { id: 3, url: 'https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, url: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, url: 'https://plus.unsplash.com/premium_photo-1663950774999-8da6f0553d8c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach(slide => {
        slide.classList.remove("slick-active-large");
      });
      slides[next + 1].classList.add("slick-active-large");
    }
  };

  return (
    <div className="destinations-container">
      <h2 className="title">Destinations</h2>
      <p className="subtitle">Explore our beautiful destinations</p>
      <Slider {...settings} className="slider">
        {images.map(image => (
          <div key={image.id} className="slide">
            <div className="slide-content">
              <img src={image.url} alt={`Destination ${image.id}`} />
              <div className="slide-description">
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destinations;
