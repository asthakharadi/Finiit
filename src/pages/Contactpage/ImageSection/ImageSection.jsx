import React from "react";
import "./ImageSection.scss";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

const ImageSection = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps?q=Pankaj%20Jewellers%2C%20MG%20Road%20Chokshi%20Bazar%2C%20nr.%20bus%20stand%2C%20Mandvi%2C%20Vadodara%2C%20Gujarat%20390001",
      "_blank"
    );
  };

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

  return (
    <div className="image-section">
      <div className="image-section__content">
        <p className="image-section__tag">
          <motion.span
            variants={arrowVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          VISIT US
        </p>

        <h2>Our Location</h2>
        {/* <div className="image-section__divider"></div> */}
        <p>
          Visit us at our store in Vadodara. We are always happy to assist you
          with your requirements.
        </p>
      </div>

      <div className="image-section__map-wrapper" onClick={handleMapClick}>
        <iframe
          title="Pankaj Jewellers Location"
          src="https://www.google.com/maps?q=Pankaj%20Jewellers%2C%20MG%20Road%20Chokshi%20Bazar%2C%20nr.%20bus%20stand%2C%20Mandvi%2C%20Vadodara%2C%20Gujarat%20390001&z=17&output=embed"
          loading="lazy"
        ></iframe>

        <div className="map-click-hint">
          <FaExternalLinkAlt />
          <span>Click to open in Google Maps</span>
        </div>

        {/* <div className="map-card">
          <div className="map-card__icon">
            <FaMapMarkerAlt className="map-icon" />
          </div>
          <div className="map-card__content">
            <h4>Pankaj Jewellers</h4>
            <p>
              MG Road Chokshi Bazar, nr. bus stand,
              <br />
              Mandvi, Vadodara, Gujarat 390001
            </p>
            <div className="map-card__details">
              <span><FaClock /> Mon-Sat: 10AM - 8PM</span>
              <span><FaPhoneAlt /> +91 12345 67890</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ImageSection;