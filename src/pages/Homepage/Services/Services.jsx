import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Services.scss";
import { FaCogs, FaUsers, FaStore, FaShieldAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import exploreArrow from "../../../assets/Hero/arrow.png";

const FeatureItem = ({ children, icon, direction, isMobile }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    amount: 0.35,
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      });
    } else {
      controls.start(
        isMobile
          ? {
              opacity: 0,
              x: direction === "left" ? -80 : 80,
              y: 0,
            }
          : {
              opacity: 0,
              x: 0,
              y: 30,
            }
      );
    }
  }, [isInView, controls, isMobile, direction]);

  return (
    <motion.div
      ref={ref}
      className="feature"
      animate={controls}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.15,
          rotate: 360,
          transition: { duration: 0.4 },
        }}
      >
        {icon}
      </motion.div>

      <p>{children}</p>
    </motion.div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleExploreClick = () => {
    navigate("/domestic-market-expertise");
  };

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

  return (
    <div id="services-section" className="services">
      <motion.div
        className="services__top"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="services__top-block">
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
            From financial compliance to business automation, we offer end-to-end
            services tailored to your needs.
          </motion.h1>

          <motion.p className="services__top-text" variants={fadeInUp}>
            From compliance to accounting and financial management, we take care
            of everything from start to finish behind the scenes, giving you the
            clarity and confidence to focus on growing and scaling your business.
          </motion.p>

          <motion.button
            className="explore-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleExploreClick}
          >
            EXPLORE SERVICE
            <motion.img
              src={exploreArrow}
              alt="arrow"
              className="btn-icon-img"
              variants={arrowHover}
              whileHover="hover"
            />
          </motion.button>
        </div>

        <div className="services__top-block">
          <motion.p className="tag" variants={fadeInUp}>
            <motion.span
              variants={arrowVariants}
              initial="hidden"
              animate={["visible", "animate"]}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <MdKeyboardDoubleArrowUp className="tag-arrow" />
            </motion.span>
            INDUSTRIAL TRAINING
          </motion.p>

          <motion.h1 variants={fadeInUp}>
            Empowering future professionals through hands-on training
          </motion.h1>

          <motion.p className="services__top-text" variants={fadeInUp}>
            With guided mentorship and real-world projects, we help you gain
            practical experience, sharpen your skills, and build a strong
            foundation for your professional journey.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="marquee"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="marquee__content">
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
        </div>
        <div className="marquee__content">
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
          TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE · TECHNOLOGY · FINANCE ·
        </div>
      </motion.div>

      <motion.div
        className="services__bottom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
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
          Because we blend technology with financial expertise, ensuring your
          business runs smarter and safer.
        </motion.h2>

        <div className="features">
          <FeatureItem icon={<FaCogs />} direction="left" isMobile={isMobile}>
            <>
              All-in-One Solution <br />
              (IT + Finance + Software)
            </>
          </FeatureItem>

          <FeatureItem icon={<FaUsers />} direction="right" isMobile={isMobile}>
            <>
              Expert Team with <br />
              Practical Experience
            </>
          </FeatureItem>

          <FeatureItem icon={<FaStore />} direction="left" isMobile={isMobile}>
            <>
              Scalable for <br />
              Local & Global Businesses
            </>
          </FeatureItem>

          <FeatureItem icon={<FaShieldAlt />} direction="right" isMobile={isMobile}>
            <>
              Reliable, Secure & <br />
              Compliance-Focused
            </>
          </FeatureItem>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;