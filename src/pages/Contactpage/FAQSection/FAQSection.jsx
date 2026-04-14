import React, { useState, useRef } from "react";
import "./FAQSection.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md"; // ✅ added

const faqData = [
  {
    id: 1,
    question: "What services do you provide?",
    answer:
      "We provide a range of business and support services designed to help clients with their requirements efficiently and professionally.",
  },
  {
    id: 2,
    question: "How can I contact your team for support?",
    answer:
      "You can contact our team through the contact form, email, or phone number provided on the website. Our team will get back to you as soon as possible.",
  },
  {
    id: 3,
    question: "Do you offer customized solutions for different business needs?",
    answer:
      "Yes, we understand that every business has different needs, so we offer customized solutions based on your goals and requirements.",
  },
  {
    id: 4,
    question: "How long does it take to respond to an enquiry?",
    answer:
      "Our usual response time is within 24 to 48 hours depending on the nature of the enquiry and the support required.",
  },
  {
    id: 5,
    question: "Can I visit your office directly for discussion?",
    answer:
      "Yes, you can visit our office during working hours. We recommend contacting us in advance so we can assist you better.",
  },
  {
    id: 6,
    question: "Is my information secure when I submit the form?",
    answer:
      "Yes, your information is kept secure and is only used for communication, support, and service-related purposes.",
  },
];

// ✅ arrow animation (same as contact)
const arrowVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="faq-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="faq-section__top">

        {/* ✅ NEW ARROW + TEXT */}
        <p className="faq-section__tag">
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          FAQ
        </p>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find quick answers to the most common questions about our services,
          support, and process.
        </p>
      </div>

      <motion.div
        className="faq-section__grid"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqData.map((item) => (
          <motion.div
            key={item.id}
            className={`faq-card ${openId === item.id ? "active" : ""}`}
            variants={cardVariants}
          >
            <div
              className="faq-card__header"
              onClick={() => handleToggle(item.id)}
            >
              <h3>{item.question}</h3>
              <span className="faq-card__icon">
                {openId === item.id ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  className="faq-card__body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="faq-card__body-inner">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;