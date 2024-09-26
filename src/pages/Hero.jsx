import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonial';


export const Hero = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the target page
        navigate("/destinations");
    };
    // List of images for the slideshow
    const images = [
        "https://images.unsplash.com/photo-1650668302253-3fc13879ec85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1664238753937-a2c7ddd1a4e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    // State to track the current active image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Set an interval to change the image every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (

        <>
            <section
                className="hero"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
                <div className="hero__content">
                    <p>Welcome to </p>
                    <h3 className="hero__title">Experience The Ultimate Safari Adventure by Larema Trekking and Adventure</h3>
                    <h2 className="hero__subtitle">TANZANIA</h2>
                    <button className="hero__button" onClick={handleClick}>Explore</button>
                </div>
            </section>
            <WhyChooseUs />
            <Testimonials />

        </>

    );
};

export default Hero;
