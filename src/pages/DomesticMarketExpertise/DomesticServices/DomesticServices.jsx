import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DomesticServices.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import cardImg from "../../../assets/DomesticMarketExpertise/gst.png";
import myIcon from "../../../assets/Hero/arrow.png";

const data = [
  "GST REGISTRATION",
  "GST REGISTRATION",
  "GST FILINGS",
  "GST RECONCILIATION",
  "UDYAM CERTIFICATION",
  "BOOKKEEPING",
  "ACCOUNTING & RECONCILIATION",
  "SALES INVOICE, EINVOICE OR EWAY BILL GENERATION",
  "CUSTOMER QUERY MANAGEMENT",
  "AUDITING & COMPLIANCE",
  "INCOME TAX FILINGS",
  "MUTUAL FUNDS & SIP ADVISORY",
];

const DomesticServices = () => {
  const navigate = useNavigate();
  const [isSlider, setIsSlider] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);
  const [startIndex, setStartIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Arrow animation variants
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

  // Tag fade in animation
  const tagVariants = {
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

  // Card container variants for grid layout
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    },
  };

  // Slide variants for slider layout
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#2aa072",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Section container animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setIsSlider(true);
        setVisibleCards(2);
        setAutoScroll(true);
        setStartIndex((prev) => Math.min(prev, data.length - 2));
      } else if (width <= 992) {
        setIsSlider(true);
        setVisibleCards(3);
        setAutoScroll(true);
        setStartIndex((prev) => Math.min(prev, data.length - 3));
      } else {
        setIsSlider(false);
        setVisibleCards(4);
        setStartIndex(0);
        setAutoScroll(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSlider || !autoScroll) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const maxIndex = data.length - visibleCards;
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isSlider, autoScroll, visibleCards]);

  const handleCardClick = (e) => {
    if (!isSlider) return;
    e.stopPropagation();
    setAutoScroll(false);
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      if (isSlider) {
        setAutoScroll(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSlider]);

  const handlePrev = () => {
    setAutoScroll(false);
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setAutoScroll(false);
    setStartIndex((prev) => {
      const maxIndex = data.length - visibleCards;
      return Math.min(prev + 1, maxIndex);
    });
  };

  return (
    <motion.div
      className="domestic"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="domestic__top">
        <motion.p
          className="domestic__tag"
          variants={tagVariants}
        >
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp />
          </motion.span>
          OUR DOMESTIC SERVICES
        </motion.p>

        <motion.h2
          variants={tagVariants}
        >
          All-in-One Business Support
        </motion.h2>

        <motion.p
          className="domestic__desc"
          variants={tagVariants}
        >
          Managing compliance, taxation, and finances can be complex. Our
          domestic market services are designed to simplify these processes,
          ensuring accuracy, efficiency, and peace of mind.
        </motion.p>
      </div>

      {!isSlider ? (
        <motion.div
          className="domestic__grid"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((title, i) => (
            <motion.div
              className="domestic__card"
              key={`${title}-${i}`}
              variants={cardVariants}
              whileHover="hover"
              custom={i}
            >
              <div className="card-text">
                <h4>{title}</h4>
                <p>
                  Hassle-free registration and complete compliance solutions
                  for your business growth.
                </p>
              </div>

              <div className="card-img">
                <img src={cardImg} alt={title} />
              </div>

              <div
  className="card-icon"
  onClick={(e) => {
    e.stopPropagation();
    navigate("/contact");
  }}
>
  <img src={myIcon} alt="icon" />
</div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="domestic__slider">
          <motion.div
            className="domestic__track"
            animate={{
              transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
          >
            {data.map((title, i) => (
              <motion.div
                className="domestic__slide"
                key={`${title}-${i}`}
                onClick={handleCardClick}
                style={{ minWidth: `${100 / visibleCards}%` }}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
              >
                <motion.div
                  className="domestic__card"
                  whileHover={isSlider ? { scale: 1.02, y: -5 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  <div className="card-text">
                    <h4>{title}</h4>
                    <p>
                      Hassle-free registration and complete compliance
                      solutions for your business growth.
                    </p>
                  </div>

                  <div className="card-img">
                    <img src={cardImg} alt={title} />
                  </div>

                  <div
  className="card-icon"
  onClick={(e) => {
    e.stopPropagation();
    navigate("/contact");
  }}
>
  <img src={myIcon} alt="icon" />
</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {isSlider && (
        <motion.div
          className="domestic__mobile-controls"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
     <motion.button className="nav-btn" onClick={handlePrev}>
 <HiMiniArrowLongLeft size={26} />
</motion.button>

<motion.button className="nav-btn" onClick={handleNext}>
  <HiMiniArrowLongRight size={26} />
</motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DomesticServices;