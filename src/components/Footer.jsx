import React from 'react';
import './Footer.css'; // Add the CSS below
import logo from "../green_tech_logo.jpg"; // Replace with the correct path to your logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <p>
            Larema Trekk and Adventure is your ultimate partner for trekking and adventure. We offer exclusive experiences 
            and tours that connect you with the world's most beautiful landscapes.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/tours">Tours & Adventures</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p><strong>Email:</strong> info@larematrekk.com</p>
          <p><strong>Phone:</strong> +123 456 789</p>
          <p><strong>Location:</strong> 123 Adventure Road, Mountain Town, Tanzania</p>
        </div>

        <div className="footer-section newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get the latest trekking tips, adventure news, and exclusive offers delivered to your inbox.</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Larema Trekking And Explore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
