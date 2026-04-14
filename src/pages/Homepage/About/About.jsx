import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import aboutImg from "../../../assets/About/about1.png";
import trailArrowIcon from "../../../assets/Hero/arrow.png";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const About = () => {
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

  // Left side animation - slide from left
  const leftVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Right side animation - slide from right
  const rightVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
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

  // Image animation
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT */}
      <motion.div className="about__left" variants={leftVariants}>
        <motion.p className="about__tag">
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>{" "}
          ABOUT FINIIT
        </motion.p>

        <motion.h1 variants={fadeInUp}>
          Empowering Businesses <br />
          with Smart Solutions
        </motion.h1>

        <motion.p className="about__desc" variants={fadeInUp}>
          At Finiit, we combine technology, finance, and innovation to simplify the way businesses operate. Whether you're a startup or an established enterprise, we help you optimize processes, stay compliant, and grow faster with smart digital solutions.
        </motion.p>

        <motion.p className="about__desc" variants={fadeInUp}>
          Our mission is to streamline your business operations by blending innovative IT solutions, custom software development, and reliable financial services - whether you operate locally or globally.
        </motion.p>

        {/* Button Left Side */}
        <motion.button
          className="about__btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          FREE TRIAL
          <motion.img
            src={trailArrowIcon}
            alt="arrow"
            className="btn-arrow-icon"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </motion.div>

      {/* RIGHT - Image */}
      <motion.div className="about__right" variants={rightVariants}>
        <motion.img
          src={aboutImg}
          alt="about"
          className="about-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;