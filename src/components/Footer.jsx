import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <Footer className="Footer">
      <div className="Footer-left">
        <img src="your-logo.png" alt="Company Logo" className="logo" />
        <p>Thank you for your continued support.</p>
        <p>Contact us for much longer.</p>
      </div>
      <div className="Footer-middle">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Mobile</a></li>
        </ul>
        <h3>Contact</h3>
        <ul>
          <li><a href="#">Help/FAQ</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Affiliates</a></li>
        </ul>
        <h3>More</h3>
        <ul>
          <li><a href="#">Airlines</a></li>
          <li><a href="#">Airline*</a></li>
          <li><a href="#">Low fare tips</a></li>
        </ul>
      </div>
      <div className="Footer-right">
        <h3>Discover our app</h3>
        <div className="app-icons">
          <a href="#">
            <img src="google-play-badge.png" alt="Google Play" />
          </a>
          <a href="#">
            <img src="app-store-badge.png" alt="App Store" />
          </a>
        </div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </Footer>
  );
}

export default Footer;