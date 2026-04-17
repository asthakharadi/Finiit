import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./ContactUS.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const serviceOptions = [
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
  "LOAN ADVISORY",
];

const ContactUS = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Full name is required"),

  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),

  // ❌ required hata diya (Service type error nahi aayega)
  serviceType: Yup.string(),

  // ❌ "Message is required" hata diya
  // ✅ sirf typing pe validation
  message: Yup.string()
    .test(
      "message-length",
      "Message must be at least 10 characters",
      (value) =>
        !value || value.trim().length === 0 || value.trim().length >= 10
    )
    .max(500, "Message cannot exceed 500 characters"),
});
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      serviceType: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert("Thank you! We will get back to you soon.");
      resetForm();
      setOpen(false);
    },
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        if (!formik.touched.serviceType) {
          formik.setFieldTouched("serviceType", true);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formik]);

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="contactus">
      <div className="contactus__container">
        {/* LEFT SIDE */}
        <motion.div
          className="contactus__left"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="contactus__tag">
            <motion.span
              variants={arrowVariants}
              initial="hidden"
              animate={["visible", "animate"]}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <MdKeyboardDoubleArrowUp className="tag-arrow" />
            </motion.span>
            GET IN TOUCH
          </p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, amount: 0.2 }}
          >
            We are always <br />
            ready to help you <br />
            and answer your <br />
            questions!
          </motion.h1>

          <motion.p
            className="contactus__desc"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true, amount: 0.2 }}
          >
            Whether you have questions, feedback, or need support,
            our team is ready to assist you.
          </motion.p>

          <motion.div
            className="contactus__info"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="info-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.45}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4>Contact Us</h4>
              <p>+91 9099300717</p>
            </motion.div>

            <motion.div
              className="info-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.5}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4>Email</h4>
              <p>info@finiit.com</p>
            </motion.div>
          </motion.div>

          {/* <motion.div
            className="contactus__location"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.55}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4>Location</h4>
            <p>
              Pankaj Jewellers, MG Road Chokshi Bazar,
              <br />
              nr. bus stand, Mandvi, Vadodara,
              <br />
              Gujarat 390001
            </p>
          </motion.div> */}

          <motion.div
            className="contactus__social"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4>Social Network</h4>
            <div className="icons">
              <motion.span
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram />
              </motion.span>
              <motion.span
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebookF />
              </motion.span>
              <motion.span
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedinIn />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="contactus__right"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.25}
            viewport={{ once: true, amount: 0.2 }}
          >
            LET&apos;S CONNECT
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true, amount: 0.2 }}
          >
            Tell Us About Your Requirement!
          </motion.p>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <motion.input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.35}
                viewport={{ once: true, amount: 0.2 }}
                className={
                  formik.touched.fullName && formik.errors.fullName ? "error" : ""
                }
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="error-message">{formik.errors.fullName}</div>
              )}
            </div>

            <div className="form-group">
              <motion.input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                viewport={{ once: true, amount: 0.2 }}
                className={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "error"
                    : ""
                }
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="error-message">{formik.errors.phoneNumber}</div>
              )}
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.45}
                viewport={{ once: true, amount: 0.2 }}
                className={
                  formik.touched.email && formik.errors.email ? "error" : ""
                }
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.5}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="custom-select" ref={dropdownRef}>
                  <div
                    className={`select-box ${
                      formik.touched.serviceType && formik.errors.serviceType
                        ? "error"
                        : ""
                    }`}
                    onClick={() => setOpen((prev) => !prev)}
                    onBlur={() => formik.setFieldTouched("serviceType", true)}
                    tabIndex={0}
                  >
                    <span>
                      {formik.values.serviceType || "Select Service Type"}
                    </span>
                    <span className={`select-arrow ${open ? "open" : ""}`}>
                      ▾
                    </span>
                  </div>

                  {open && (
                    <div className="dropdown">
                      {serviceOptions.map((item, index) => (
                        <div
                          key={index}
                          className={`option ${
                            formik.values.serviceType === item ? "selected" : ""
                          }`}
                          onClick={() => {
                            formik.setFieldValue("serviceType", item);
                            formik.setFieldTouched("serviceType", true);
                            setOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {formik.touched.serviceType && formik.errors.serviceType && (
                <div className="error-message">{formik.errors.serviceType}</div>
              )}
            </div>

            <div className="form-group">
              <motion.textarea
                name="message"
                placeholder="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.55}
                viewport={{ once: true, amount: 0.2 }}
                className={
                  formik.touched.message && formik.errors.message ? "error" : ""
                }
              ></motion.textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="error-message">{formik.errors.message}</div>
              )}
            </div>

            <motion.button
              type="submit"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={!formik.isValid || !formik.dirty}
            >
              SUBMIT REQUEST
            </motion.button>

            <motion.span
              className="note"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.65}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AiOutlineInfoCircle className="info-icon" />
              Your information is secure and will only be used to assist you.
            </motion.span>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUS;