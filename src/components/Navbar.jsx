import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import the CSS file for styling
import logo from '../larema.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li> {/* Use Link with to="/" */}
        <li><Link to="/about">About</Link></li> {/* Use Link with to="/about" */}
        <li><Link to="/routes">Routes</Link></li> {/* Use Link with to="/services" */}
        <li><Link to="/contact">Contact</Link></li> {/* Use Link with to="/contact" */}
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
