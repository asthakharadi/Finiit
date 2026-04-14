// Services.js - Professional Framer Motion with same animation style
import React from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import { FaHome, FaGlobe, FaCogs, FaUsers, FaStore, FaShieldAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import exploreArrow from "../../../assets/Hero/arrow.png";

const Services = () => {
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

  // Fade in up for text elements
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

  // Fade in left for marquee
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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

  // Icon pop animation
  const iconPop = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Feature box icon animation
  const featureIconPop = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 360,
      transition: {
        duration: 0.4,
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
        delay: 0.3,
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

  // Arrow hover animation
  const arrowHover = {
    hover: {
      x: 8,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  // Stagger for service items
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Stagger for features
  const staggerFeatures = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Service item animation
  const serviceItem = {
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

  // Feature item animation
  const featureItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div id="services-section" className="services">
      {/* TOP SECTION */}
      <motion.div
        className="services__top"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="tag" variants={fadeInUp}>
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          WHAT WE OFFER
        </motion.p>

        <motion.h1 variants={fadeInUp}>
          From financial compliance to business automation, we offer end-to-end services tailored to your needs.
        </motion.h1>

        <motion.div
          className="services__items"
          variants={staggerItems}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="item" variants={serviceItem}>
            <motion.div
              className="icon"
              variants={iconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaHome />
            </motion.div>
            <p>Domestic Market Services</p>
          </motion.div>

          <motion.div className="item" variants={serviceItem}>
            <motion.div
              className="icon"
              variants={iconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaGlobe />
            </motion.div>
            <p>Global Services</p>
          </motion.div>
        </motion.div>

        <motion.button
          className="explore-btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          EXPLORE SERVICES
          <motion.img
            src={exploreArrow}
            alt="arrow"
            className="btn-icon-img"
            variants={arrowHover}
            whileHover="hover"
          />
        </motion.button>
      </motion.div>

      {/* MARQUEE SECTION */}
      <motion.div
        className="marquee"
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
      >
        <div className="marquee__content">
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
        </div>
        <div className="marquee__content">
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
        </div>
      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        className="services__bottom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="tag" variants={fadeInUp}>
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          WHY CHOOSE US
        </motion.p>

        <motion.h2 variants={fadeInUp}>
          Because we blend technology with financial expertise, ensuring your business runs smarter and safer.
        </motion.h2>

        <motion.div
          className="features"
          variants={staggerFeatures}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="feature"
            variants={featureItem}
            whileHover="hover"
          >
            <motion.div
              className="box"
              variants={featureIconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaCogs />
            </motion.div>
            <p>
              All-in-One Solution <br />
              (IT + Finance + Software)
            </p>
          </motion.div>

          <motion.div
            className="feature"
            variants={featureItem}
            whileHover="hover"
          >
            <motion.div
              className="box"
              variants={featureIconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaUsers />
            </motion.div>
            <p>
              Expert Team with <br />
              Practical Experience
            </p>
          </motion.div>

          <motion.div
            className="feature"
            variants={featureItem}
            whileHover="hover"
          >
            <motion.div
              className="box"
              variants={featureIconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaStore />
            </motion.div>
            <p>
              Scalable for <br />
              Local & Global Businesses
            </p>
          </motion.div>

          <motion.div
            className="feature"
            variants={featureItem}
            whileHover="hover"
          >
            <motion.div
              className="box"
              variants={featureIconPop}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaShieldAlt />
            </motion.div>
            <p>
              Reliable, Secure & <br />
              Compliance-Focused
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;