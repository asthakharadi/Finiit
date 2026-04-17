import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DomesticServices.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import img1 from "../../../assets/DomesticMarketExpertise/gstregistration.png";
import img2 from "../../../assets/DomesticMarketExpertise/gstfiling.png";
import img3 from "../../../assets/DomesticMarketExpertise/gstreconciliation.png";
import img4 from "../../../assets/DomesticMarketExpertise/udayam.png";
import img5 from "../../../assets/DomesticMarketExpertise/bookkeeping.png";
import img6 from "../../../assets/DomesticMarketExpertise/accounting.png";
import img7 from "../../../assets/DomesticMarketExpertise/salesinvoice.png";
import img8 from "../../../assets/DomesticMarketExpertise/customerquery.png";
import img9 from "../../../assets/DomesticMarketExpertise/auditing.png";
import img10 from "../../../assets/DomesticMarketExpertise/incometax.png";
import img11 from "../../../assets/DomesticMarketExpertise/mutualfunds.png";
import img12 from "../../../assets/DomesticMarketExpertise/loanadvisary.png";

import myIcon from "../../../assets/Hero/arrow.png";

const data = [
  {
    title: "GST REGISTRATION",
    desc: "Hassle-free registration toobtain your GSTIN quicklyand smoothly.",
    img: img1,
  },
  {
    title: "GST FILINGS",
    desc: "Timely and accurate filing of monthly/quarterly returns.",
    img: img2,
  },
  {
    title: "GST RECONCILIATION",
    desc: "Match your purchase and sales data to avoid mismatches and penalties.",
    img: img3,
  },
  {
    title: "UDYAM CERTIFICATION",
    desc: "Register your business under MSME for government benefits.",
    img: img4,
  },
  {
    title: "BOOKKEEPING",
    desc: "Organized records of all your financial transactions.",
    img: img5,
  },
  {
    title: "ACCOUNTING & RECONCILIATION",
    desc: "Maintain accurate accounts and reconcile statements with ease. ",
    img: img6,
  },
  {
    title: "SALES INVOICE, EINVOICE OR EWAY BILL GENERATION",
    desc: "Professional invoices that meet GST compliance standards.",
    img: img7,
  },
  {
    title: "CUSTOMER QUERY MANAGEMENT",
    desc: "Streamlined support to handle client queries efficiently.",
    img: img8,
  },
  {
    title: "AUDITING & COMPLIANCE",
    desc: "Ensure your business meets statutory requirements with expert guidance.",
    img: img9,
  },
  {
    title: "INCOME TAX FILINGS",
    desc: "Simplified filing for individuals and businesses.",
    img: img10,
  },
  {
    title: "MUTUAL FUNDS & SIP ADVISORY",
    desc: "Guidance to grow wealth through smart investments.",
    img: img11,
  },
  {
    title: "LOAN ADVISORY",
    desc: "Assistance in choosing the right financing options for your business.",
    img: img12,
  }
];

const DomesticServices = () => {
  const navigate = useNavigate();
  const [isSlider, setIsSlider] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);
  const [startIndex, setStartIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

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
        <motion.p className="domestic__tag" variants={tagVariants}>
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

        <motion.h2 variants={tagVariants}>
          All-in-One Business Support
        </motion.h2>

        <motion.p className="domestic__desc" variants={tagVariants}>
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
          {data.map((item, i) => (
            <motion.div
              className="domestic__card"
              key={`${item.title}-${i}`}
              variants={cardVariants}
              whileHover="hover"
              custom={i}
            >
              <div className="card-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              <div className="card-img">
                <img src={item.img} alt={item.title} />
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
            {data.map((item, i) => (
              <motion.div
                className="domestic__slide"
                key={`${item.title}-${i}`}
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
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

                  <div className="card-img">
                    <img src={item.img} alt={item.title} />
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