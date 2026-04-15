import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.scss";

// top row images
import img1 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img2 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img3 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img4 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img5 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img6 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img7 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img8 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img9 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img10 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img11 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img12 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import img13 from "../../../assets/DomesticMarketExpertise/contactus/card.png";
import arrowSvg from "../../../assets/Hero/arrow.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#248a62",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const arrowVariants = {
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};

const ContactUs = () => {
  const people = [
    { id: 1, img: img1, cls: "card-1" },
    { id: 2, img: img2, cls: "card-2 active" },
    { id: 3, img: img3, cls: "card-3" },
    { id: 4, img: img4, cls: "card-4" },
    { id: 5, img: img5, cls: "card-5" },
    { id: 6, img: img6, cls: "card-6" },
    { id: 7, img: img7, cls: "card-7" },
    { id: 8, img: img8, cls: "card-8" },
    { id: 9, img: img9, cls: "card-9" },
    { id: 10, img: img10, cls: "card-10" },
    { id: 11, img: img11, cls: "card-11" },
    { id: 12, img: img12, cls: "card-12" },
    { id: 13, img: img13, cls: "card-13" },
  ];

  return (
    <motion.section
      className="contact-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact-us__inner">
        <div className="contact-us__gallery-wrap">
          <motion.div
            className="contact-us__gallery"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {people.map((item) => (
              <motion.div
                key={item.id}
                className={`contact-us__card ${item.cls}`}
                variants={cardVariants}
                whileHover="hover"
                custom={item.id}
              >
                <img src={item.img} alt={`person-${item.id}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="contact-us__content"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Simplify Your Business
            <br />
            Operations Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            Let us handle your compliance and financial
            <br />
            tasks while you focus on growth.
          </motion.p>

          <motion.button
            className="contact-us__btn"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true }}
          >
            <span>CONTACT US</span>
            <motion.img
              src={arrowSvg}
              alt="arrow"
              variants={arrowVariants}
              whileHover="hover"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;