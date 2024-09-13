import React from 'react';
import './About.css';

const About = () => {
    const projects = [
        {
            title: "HIKING",
            imageUrl: "https://plus.unsplash.com/premium_photo-1690574169354-d6cc4299cf84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the correct path
            link: "/forest-details", // Link to the details page
        },
        {
            title: "MOUNTAIN CLIMBING",
            imageUrl: "https://images.unsplash.com/photo-1599115086667-c134c829edb6?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/water-details",
        },
        {
            title: "SAFARI TOURS",
            imageUrl: "https://images.unsplash.com/photo-1517503462743-f87ba95a8cae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/animals-details",
        },
        {
            title: "CAMPING",
            imageUrl: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the correct path
            link: "/forest-details", // Link to the details page
        },
        {
            title: "TREKKING",
            imageUrl: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/water-details",
        },
        {
            title: "SAFARI TOURS",
            imageUrl: "https://images.unsplash.com/photo-1680241526824-96e6a6eca341?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/animals-details",
        },
    ];

    return (
        <div className="about-section">
            <h1 className="section-title">WHO WE ARE</h1>
            <p className='description'>We are a passionate team of adventure enthusiasts dedicated to providing unforgettable trekking and expedition experiences. Our goal is to help you connect with nature, challenge yourself, and create lasting memories.Some of out services include:</p>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="project-image"
                        />
                        <div className="project-details">
                            <h2 className="project-title">{project.title}</h2>
                            <a href={project.link} className="project-link">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
