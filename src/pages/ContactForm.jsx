import React from 'react';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <div className="social-media-icons">
               
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};

export default ContactForm;
