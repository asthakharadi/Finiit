import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/Navbar/logo3.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate("/domestic-market-expertise");
    closeMenu();
  };

  const handleContactClick = () => {
    navigate("/contact");
    closeMenu();
  };

  const handleConsultClick = () => {
    navigate("/consult");
    closeMenu();
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMenu();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="navbar">
        <div
          className="navbar__left"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" />
        </div>

        {!isMobile && (
          <div className="navbar__right">
            <Link
              to="/"
              onClick={closeMenu}
              className={isActive("/") ? "nav-link active" : "nav-link"}
            >
              <span>HOME</span>
            </Link>

            <span
              onClick={handleServicesClick}
              className={isActive("/domestic-market-expertise") ? "active" : ""}
              style={{ cursor: "pointer" }}
            >
              SERVICES
            </span>

            <span
              onClick={handleContactClick}
              className={isActive("/contact") ? "active" : ""}
              style={{ cursor: "pointer" }}
            >
              CONTACT
            </span>

            <button
              className={`consult-btn ${isActive("/consult") ? "active" : ""}`}
              onClick={handleConsultClick}
            >
              CONSULT NOW
            </button>
          </div>
        )}

        {isMobile && (
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      {isMobile && (
        <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="mobile-menu">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={isActive("/") ? "active" : ""}
              >
                HOME
              </Link>
            </li>

            <li>
              <span
                className={`mobile-services-link ${
                  isActive("/domestic-market-expertise") ? "active" : ""
                }`}
                onClick={handleServicesClick}
              >
                SERVICES
              </span>
            </li>

            <li>
              <span
                className={isActive("/contact") ? "active" : ""}
                onClick={handleContactClick}
              >
                CONTACT
              </span>
            </li>

            <li>
              <button
                className={`mobile-consult-btn ${
                  isActive("/consult") ? "active" : ""
                }`}
                onClick={handleConsultClick}
              >
                CONSULT NOW
              </button>
            </li>
          </ul>
        </div>
      )}

      {isMobile && isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;