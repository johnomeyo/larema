import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Routes';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/routes" element={<Services />} /> {/* Services page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/destinations" element={<Destinations />} /> {/* Destinations page */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
