import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            <p>Let us know how we can help.</p>
            <div className="contact-options">
                <div className="contact-option">
                    <i className="fa fa-comment"></i>
                    <p>Chat to sales</p>
                    <p>Speak to our friendly team.</p>
                    <p className='contact-means'>sales@untitledui.com</p>
                </div>
                <div className="contact-option">
                    <i className="fa fa-bell"></i>
                    <p>Chat to support</p>
                    <p>We're here to help.</p>
                    <p  className='contact-means'>support@untitledui.com</p>
                </div>
                <div className="contact-option">
                    <i className="fa fa-map-marker"></i>
                    <p>Visit us</p>
                    <p>Visit our office HQ.</p>
                    <p  className='contact-means'>View on Google Maps</p>
                </div>
                <div className="contact-option">
                    <i className="fa fa-phone"></i>
                    <p>Call us</p>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <p  className='contact-means'>+1(555) 000-0000</p>
                </div>
            </div>
            <div className="faq-section">
                <h3>We'd love to hear from you☺️</h3>
            </div>
            <ContactForm/>
        </div>
    );
}

export default Contact;