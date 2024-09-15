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
      title: 'Mount Kilimanjaro',
      description: 'Experience the thrill of conquering Kilimanjaro and challenge yourself with a breathtaking ascent.',
    },
    {
      imageUrl: 'https://media2.thrillophilia.com/images/photos/000/367/618/original/1614247135_shutterstock_1362361406.jpg?w=753&h=450&dpr=1.5',
      title: 'Zanzibar',
      description: 'Relax on pristine beaches and turquoise waters and explore the Historic stone.',
    },
    {
      imageUrl: 'https://www.planetware.com/photos-large/TZA/tanzania-mount-kilimanjaro.jpg',
      title: 'Selous Game Reserve',
      description: 'Explore the vast wilderness of Selous and Encounter elephants, lions, and hippos in their natural habitat.',
    },
    {
      imageUrl: 'https://www.muchbetteradventures.com/magazine/content/images/2023/06/GettyImages-496667113--1-.jpg',
      title: 'Lake Tanganyika',
      description: 'Explore the third-largest lake in the world and Enjoy water sports and fishing on Lake Tanganyika.',
    },
    {
        imageUrl: "https://nws.ams3.cdn.digitaloceanspaces.com/content/5A33D1474A94741A998AA72B8C722C9B/1537-2048.webp",
        title: 'Ruaha National Park',
        description: 'Experience the untamed wilderness of Ruaha.Explore the baobab-dotted landscapes of Ruaha.Encounter diverse wildlife in this remote park.',
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
