import React from 'react';
import './CardScroll.css';

const cards = [
    { id: 1, title: "Mount Kilimanjaro", imgSrc: "https://www.planetware.com/photos-large/TZA/tanzania-mount-kilimanjaro.jpg" },
    // { id: 2, title: "Energy Distribution", imgSrc: "https://www.africaincoming.com/images/city/572461716429434103019999.jpg" },
    { id: 3, title: "Beautiful Savannah", imgSrc: "https://www.relaxgetaways.com/uploads/media/Best%20Tourist%20Attractions%20and%20Places%20To%20Visit%20in%20Tanzania/Tanzania%20INTERO.jpg" },
    { id: 4, title: "Awesome Waterfall", imgSrc: "https://www.tanzaniatourism.com/images/uploads/Kaporogwe_Waterfalls_Mbeya_01.jpg" },
    { id: 5, title: "Great Beaches", imgSrc: "https://www.traveltourxp.com/wp-content/uploads/2016/05/Attractions-Of-Tanzania.jpg" }
];

const CardScroll = () => {
    return (
        <>
            <div className="card-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.imgSrc} alt={card.title} className="card-image" />
                        <div className="card-title">{card.title}</div>
                    </div>
                ))}
            </div>
            <p></p>
            <p></p>
            <p></p>
        </>
    );
};

export default CardScroll;
