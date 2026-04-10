import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/Navbar/logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="navbar">
        {/* LEFT - Logo */}
        <div className="navbar__left">
          <img src={logo} alt="logo" />
        </div>

        {/* RIGHT - Desktop Menu (only for desktop) */}
        {!isMobile && (
          <div className="navbar__right">
            <span>ABOUT US</span>
            <span>SERVICES</span>
            <span>CONTACT</span>
            <button className="consult-btn">CONSULT NOW</button>
          </div>
        )}

        {/* Mobile & Tablet Hamburger Icon */}
        {isMobile && (
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      {/* Mobile & Tablet Navigation Menu */}
      {isMobile && (
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <button className="close-btn" onClick={closeMenu}>✕</button>
          <ul className="mobile-menu">
            <li><a href="#" onClick={closeMenu}>ABOUT US</a></li>
            <li><a href="#" onClick={closeMenu}>SERVICES</a></li>
            <li><a href="#" onClick={closeMenu}>CONTACT</a></li>
            <li><button className="mobile-consult-btn" onClick={closeMenu}>CONSULT NOW</button></li>
          </ul>
        </div>
      )}

      {/* Overlay when menu is open */}
      {isMobile && isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;