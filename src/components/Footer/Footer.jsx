import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope, // ✅ NEW ICON
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Navbar/logo3.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    window.location.href = "tel:+919099300717";
  };

  // ✅ EMAIL FUNCTION
  const handleEmailClick = () => {
    window.location.href = "mailto:info@finiit.com";
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconHover = {
    y: -6,
    scale: 1.08,
    transition: { duration: 0.25, ease: "easeOut" },
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="footer__wrapper" variants={containerVariants}>
        
        {/* LEFT SECTION */}
        <motion.div className="footer__left" variants={fadeLeft}>
          <motion.div
            className="footer__logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <motion.img src={logo} alt="Finiit" />

            <motion.p className="footer__tagline">
              Smart solutions for compliance and growth. Reliable. Simple. Effective.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CENTER SECTION */}
        <motion.div className="footer__center" variants={fadeUp}>
          <motion.h3 variants={itemVariants}>MENU</motion.h3>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("/")}
            whileHover={{ x: 8 }}
          >
            Home
          </motion.p>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("/domestic-market-expertise")}
            whileHover={{ x: 8 }}
          >
            Services
          </motion.p>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("/contact")}
            whileHover={{ x: 8 }}
          >
            Contact
          </motion.p>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div className="footer__right" variants={fadeRight}>
          
          {/* PHONE */}
          <motion.div
            className="footer__info"
            onClick={handlePhoneClick}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
            whileHover={{ x: 6 }}
          >
            <motion.span whileHover={{ scale: 1.08 }}>
              <FaPhoneAlt />
            </motion.span>
            <span>+91 9099300717</span>
          </motion.div>

          {/* ✅ EMAIL (LOCATION REMOVED) */}
          <motion.div
            className="footer__info"
            onClick={handleEmailClick}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
            whileHover={{ x: 6 }}
          >
            <motion.span whileHover={{ scale: 1.08 }}>
              <FaEnvelope />
            </motion.span>
            <span>info@finiit.com</span>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div className="footer__bottom">
        
        <motion.div className="footer__icons">
          <motion.div
            whileHover={iconHover}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          >
            <FaInstagram />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <FaFacebookF />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            <FaLinkedinIn />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            <FaYoutube />
          </motion.div>
        </motion.div>

        <motion.div className="footer__copyright">
          <p className="copyright-text">
            <span className="copyright-line">
              Copyright © 2026 Finiit, All Rights Reserved.
            </span>
            <span className="design-line">
              Design and Developed by{" "}
              <span
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => window.open("https://finiit.com", "_blank")}
              >
                TECHORSES
              </span>
            </span>
          </p>
        </motion.div>

      </motion.div>
    </motion.footer>
  );
};

export default Footer;