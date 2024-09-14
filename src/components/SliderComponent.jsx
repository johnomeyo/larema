import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'; // Corrected imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './SliderComponent.css';

const SliderComponent = () => {
  const slides = [
    {
      imageUrl: 'https://ecotourism.org/wp-content/uploads/2019/07/sa_1563472572_Kilimanjaro%20news.jpg',
      title: 'Name Slider',
      description: 'Description 1',
    },
    {
      imageUrl: 'https://media2.thrillophilia.com/images/photos/000/367/618/original/1614247135_shutterstock_1362361406.jpg?w=753&h=450&dpr=1.5',
      title: 'Name Slider',
      description: 'Description 2',
    },
    {
      imageUrl: 'https://www.planetware.com/photos-large/TZA/tanzania-mount-kilimanjaro.jpg',
      title: 'Name Slider',
      description: 'Description 3',
    },
    {
      imageUrl: 'https://www.visafirst.com/blog/wp-content/uploads/2022/03/Zanzibar-beach.jpg',
      title: 'Name Slider',
      description: 'Description 4',
    },
  ];

  return (
    <div className="slider-container">
      <div className="background-image">
        <img
          src="https://source.unsplash.com/featured/?moose"
          alt="Large Feature"
        />
      </div>
      <div className="slider-content">
        <h1 className="slider-title">Scenaries</h1>
        <p className="slider-description">
          Designed using HTML, CSS, and JavaScript. Fully functional from autoplay, next, and previous slider along with extremely beautiful effects.
        </p>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]} // Specify the modules here
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-image-container">
                <img src={slide.imageUrl} alt={slide.title} />
                <div className="slide-hover-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
