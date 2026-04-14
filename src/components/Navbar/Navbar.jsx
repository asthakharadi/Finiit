// Navbar.js - Updated with smooth scroll functionality and dropdown and working navigation
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/Navbar/logo3.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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
      setIsDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    setIsDropdownOpen(false);
  };

  // Toggle dropdown on services click (desktop only)
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle Domestic Market Services click - navigate to domestic-market-expertise
  const handleDomesticMarketClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/domestic-market-expertise');
    setIsDropdownOpen(false);
    closeMenu();
  };

  // Handle Global Services click
  const handleGlobalServicesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/global-services');
    setIsDropdownOpen(false);
    closeMenu();
  };

  // Handle contact click to navigate
  const handleContactClick = () => {
    navigate('/contact');
    closeMenu();
  };

  // Handle consult now click
  const handleConsultClick = () => {
    navigate('/consult');
    closeMenu();
  };

  // Handle logo click to go home
  const handleLogoClick = () => {
    navigate('/');
    closeMenu();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar">
        {/* LEFT - Logo */}
        <div className="navbar__left" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" />
        </div>

        {/* RIGHT - Desktop Menu (only for desktop) */}
        {!isMobile && (
          <div className="navbar__right">
            <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>HOME</span>
            </Link>
            
            {/* Services with Dropdown */}
            <div className="services-dropdown" ref={dropdownRef}>
              <span 
                onClick={toggleDropdown}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
              >
                SERVICES
                <RiArrowDropDownLine 
                  className={`dropdown-arrow-icon ${isDropdownOpen ? 'open' : ''}`}
                  size={24}
                />
              </span>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div 
                    className="dropdown-item"
                    onClick={handleDomesticMarketClick}
                  >
                    Domestic Market Services
                  </div>
                  <div 
                    className="dropdown-item"
                    onClick={handleGlobalServicesClick}
                  >
                    Global Services
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/contact" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>CONTACT</span>
            </Link>
            
            <button className="consult-btn" onClick={handleConsultClick}>CONSULT NOW</button>
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
          <ul className="mobile-menu">
            <li>
              <Link to="/" onClick={closeMenu}>HOME</Link>
            </li>
            <li className="mobile-services-item">
              <div 
                className="mobile-services-trigger"
                onClick={toggleDropdown}
              >
                SERVICES
                <RiArrowDropDownLine 
                  className={`mobile-dropdown-arrow-icon ${isDropdownOpen ? 'open' : ''}`}
                  size={24}
                />
              </div>
              {isDropdownOpen && (
                <ul className="mobile-dropdown-menu">
                  <li>
                    <Link to="/domestic-market-expertise" onClick={handleDomesticMarketClick}>
                      Domestic Market Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/global-services" onClick={handleGlobalServicesClick}>
                      Global Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
            </li>
            <li>
              <button className="mobile-consult-btn" onClick={handleConsultClick}>CONSULT NOW</button>
            </li>
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