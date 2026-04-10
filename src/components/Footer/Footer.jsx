import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Navbar/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">

        {/* LEFT SECTION - Logo & Brand */}
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="Finiit" />
          </div>
          {/* <div className="footer__brand">
            <h2>FINIIT</h2>
            <p>FINANCE • TECHNOLOGY</p>
          </div> */}

          <div className="footer__icons">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

          <p className="footer__copy">
            Copyright © 2026 Finiit, All Rights Reserved. <br />
            Design and Developed by TECHORSES
          </p>
        </div>

        {/* CENTER SECTION - MENU */}
        <div className="footer__center">
          <h3>MENU</h3>
          <p>Home</p>
          <p>About us</p>
          <p>services</p>
          <p>Contact</p>
        </div>

        {/* RIGHT SECTION - Contact & Location */}
        <div className="footer__right">
          <div className="footer__info">
            <FaPhoneAlt />
            <span>+91 9099300717</span>
          </div>

          <div className="footer__info">
            <FaMapMarkerAlt />
            <span>
              Pankaj Jewellers, MG Road Chokshi <br />
              Bazar, nr. bus stand, Mandvi, <br />
              Vadodara, Gujarat 390001
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;