import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import heroImg from "../../../assets/DomesticMarketExpertise/hero.png";
import arrowIcon from "../../../assets/Hero/black-arrow.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Hero = () => {
  // Container animation - stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Fade in up animation for text elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Arrow icon animation - up and down movement
  const arrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Background fade in
  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Overlay fade in
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      variants={bgVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Overlay */}
      <motion.div
        className="hero__overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Content */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__tag" variants={fadeInUp}>
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          DOMESTIC MARKET EXPERTISE
        </motion.p>

        <motion.h1 variants={fadeInUp}>
          Complete<span> Financial &</span> <br /><span>Compliance </span>
         Solutions for <br />Your Business
        </motion.h1>

        <motion.p className="hero__desc" variants={fadeInUp}>
          From registrations to filings and financial advisory, we simplify your business
operations with reliable and efficient services.

        </motion.p>

        <motion.button
          className="hero__btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          GET STARTED
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;