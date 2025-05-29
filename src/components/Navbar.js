import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import InvestorDropdown from './InvestorDropdown';
import './InvestorDropdown.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Blue Hope</div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li className="dropdown-parent">
          <span className="dropdown-label">INVESTOR RELATION</span>
          <InvestorDropdown />
        </li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
