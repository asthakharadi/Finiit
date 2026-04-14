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
import { motion } from "framer-motion";
import logo from "../../assets/Navbar/logo3.svg";

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919099300717";
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps?q=Pankaj%20Jewellers%2C%20MG%20Road%20Chokshi%20Bazar%2C%20nr.%20bus%20stand%2C%20Mandvi%2C%20Vadodara%2C%20Gujarat%20390001",
      "_blank"
    );
  };

  const handleMenuClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* LEFT SECTION - Logo */}
        <motion.div className="footer__left" variants={fadeLeft}>
          <motion.div
            className="footer__logo"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src={logo}
              alt="Finiit"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>

        {/* CENTER SECTION - MENU */}
        <motion.div className="footer__center" variants={fadeUp}>
          <motion.h3 variants={itemVariants}>MENU</motion.h3>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("home")}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.25 }}
          >
            Home
          </motion.p>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("services")}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.25 }}
          >
            Services
          </motion.p>

          <motion.p
            variants={itemVariants}
            onClick={() => handleMenuClick("contact")}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.25 }}
          >
            Contact
          </motion.p>
        </motion.div>

        {/* RIGHT SECTION - Contact & Location */}
        <motion.div className="footer__right" variants={fadeRight}>
          <motion.div
            className="footer__info"
            onClick={handlePhoneClick}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            <motion.span whileHover={{ scale: 1.08 }}>
              <FaPhoneAlt />
            </motion.span>
            <span>+91 9099300717</span>
          </motion.div>

          <motion.div
            className="footer__info"
            onClick={handleLocationClick}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            <motion.span whileHover={{ scale: 1.08 }}>
              <FaMapMarkerAlt />
            </motion.span>
            <span>
              Pankaj Jewellers, MG Road Chokshi Bazar, nr. bus stand, Mandvi,
              Vadodara, Gujarat 390001
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright and Social Icons */}
      <motion.div
        className="footer__bottom"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      >
        <motion.div
          className="footer__copyright"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <p className="copyright-text">
            <span className="copyright-line">
              Copyright © 2026 Finiit, All Rights Reserved.
            </span>
            <span className="design-line">
              Design and Developed by TECHORSES
            </span>
          </p>
        </motion.div>

        <motion.div
          className="footer__icons"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          >
            <FaInstagram />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <FaFacebookF />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            <FaLinkedinIn />
          </motion.div>

          <motion.div
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            <FaYoutube />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;