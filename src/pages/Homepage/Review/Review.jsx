import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Review.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

// apni image ka path yaha lagao
import profileImg1 from "../../../assets/Review/profile1.png";
import profileImg2 from "../../../assets/Review/profile2.png";
import profileImg3 from "../../../assets/Review/profile3.png";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const reviews = [
    {
      name: "PAVAN JOSHI",
      position: "CEO",
      image: profileImg1,
      text: "At Finiit, we combine technology, finance, and innovation to simplify the way businesses operate. Whether you're a startup or an established enterprise, we help you optimize processes, stay compliant, and grow faster with smart digital solutions.",
    },
    {
      name: "RAHUL SHARMA",
      position: "CTO",
      image: profileImg2,
      text: "Finiit has transformed our business operations completely. Their innovative solutions and dedicated support have helped us scale new heights. Highly recommended for any business looking to digitize their operations.",
    },
    {
      name: "NEHA GUPTA",
      position: "Director",
      image: profileImg3,
      text: "The team at Finiit is exceptional. They understand our needs perfectly and deliver beyond expectations. Their financial and IT solutions have streamlined our entire workflow.",
    },
  ];

  useEffect(() => {
    const checkView = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 576);
      setIsTablet(width > 576 && width <= 992);
      setCurrentIndex(0);
    };

    checkView();
    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, []);

  useEffect(() => {
    if (isMobile || isTablet) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, isTablet, reviews.length]);

  const getVisibleCards = () => {
    if (isMobile) {
      return [reviews[currentIndex]];
    } else if (isTablet) {
      const firstIndex = currentIndex;
      const secondIndex = (currentIndex + 1) % reviews.length;
      return [reviews[firstIndex], reviews[secondIndex]];
    }
    return reviews;
  };

  const visibleCards = getVisibleCards();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const tagVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const starsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.3,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileCardVariants = {
    enter: (isTabletView) => ({
      x: isTabletView ? 600 : 300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (isTabletView) => ({
      x: isTabletView ? -600 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <motion.div
      ref={sectionRef}
      className="review"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.p className="review__tag" variants={tagVariants}>
        <motion.span
          style={{ display: "inline-flex", alignItems: "center" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MdKeyboardDoubleArrowUp className="tag-arrow" />
        </motion.span>
        REVIEW
      </motion.p>

      <motion.h2 className="review__title" variants={titleVariants}>
        What our clients say about working with Finiit.
      </motion.h2>

      <motion.div className="review__cards">
        {!isMobile && !isTablet ? (
          visibleCards.map((review, idx) => (
            <motion.div
              className="card"
              key={idx}
              custom={idx}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="card__top">
                <motion.div
                  className="avatar"
                  variants={avatarVariants}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <img src={review.image} alt={review.name} />
                </motion.div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.position}</span>
                </div>
              </div>

              <motion.p
                className="card__text"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                {review.text}
              </motion.p>

              <motion.div
                className="stars"
                variants={starsVariants}
                whileHover={{ scale: 1.1 }}
              >
                ⭐ ⭐ ⭐ ⭐ ⭐
              </motion.div>
            </motion.div>
          ))
        ) : (
          <AnimatePresence mode="wait" custom={isTablet}>
            <motion.div
              key={currentIndex}
              custom={isTablet}
              variants={mobileCardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="cards-wrapper"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {visibleCards.map((review, idx) => (
                <div className="card" key={idx}>
                  <div className="card__top">
                    <motion.div
                      className="avatar"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        delay: idx * 0.1,
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <img src={review.image} alt={review.name} />
                    </motion.div>

                    <div>
                      <h4>{review.name}</h4>
                      <span>{review.position}</span>
                    </div>
                  </div>

                  <motion.p
                    className="card__text"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    {review.text}
                  </motion.p>

                  <motion.div
                    className="stars"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {(isMobile || isTablet) && (
        <motion.div
          className="mobile-dots"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {reviews.map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.05 }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Review;