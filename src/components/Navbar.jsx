import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo-link">
          <img 
            src={isScrolled ? "/golden-logo.png" : "/white-logo.png"} 
            alt="LM EVENTZ" 
            className="navbar-logo" 
          />
        </a>

        <button 
          className={`navbar-hamburger ${isOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`navbar-nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/portfolio" className="navbar-link" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
          <a 
            href="https://wa.me/2348033536551" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="navbar-btn-mobile" 
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </a>
        </nav>

        <div className="navbar-action">
          <a 
            href="https://wa.me/2348033536551" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="navbar-btn"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
