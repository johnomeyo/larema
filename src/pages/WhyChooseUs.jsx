import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us">
            <h2>Why Choose Us for Your Adventure</h2>
   <div className="text">         <p>At Larema Trekking and Adventure, we are passionate about creating extraordinary trekking and adventure experiences that will stay with you for a lifetime. Our dedicated team of adventure specialists ensures that every journey is meticulously planned and executed, offering you the following unique benefits.</p></div>
            <div className="card-container">
                <div className="card">
                    <div className="icon-avatar"> <i className="fa fa-thumbs-up"></i></div>
                    <h3 className='choose-text'>Customer Satisfaction</h3>
                    <p> Your satisfaction is our top priority. From the moment you book until the end of your journey, we strive to exceed your expectations and make your adventure unforgettable.</p>
                </div>
                <div className="card">
                    <div className="icon-avatar1"> <i className="fa fa-earth"></i></div>
                    <h3 className='choose-text'>Expert Guides</h3>
                    <p>Our team of certified guides and local experts have years of experience navigating the most breathtaking landscapes. They are committed to your safety and to providing an enriching adventure.</p>
                </div>
                <div className="card">
                    <div className="icon-avatar2"> <i className="fa fa-star"></i></div>
                    <h3 className='choose-text'>Sustainable Travels</h3>
                    <p>We are dedicated to preserving the natural beauty of the places we explore. Our eco-friendly practices and community-focused initiatives contribute to the sustainability of our adventures..</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;