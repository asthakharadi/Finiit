import React from "react";
import "./About.scss";
import aboutImg from "../../../assets/About/About.png";
import trailArrowIcon from "../../../assets/trail-arrow-icon.png"; // Add your trail arrow logo image

const About = () => {
  return (
    <div className="about">

      {/* LEFT */}
      <div className="about__left">

        <p className="about__tag">
          <span className="tag-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 14L10 8L14 12L20 6" stroke="#1dbf73" strokeWidth="2"/>
              <path d="M4 20L10 14L14 18L20 12" stroke="#1dbf73" strokeWidth="2"/>
            </svg>
          </span>
          ABOUT FINIIT
        </p>

        <h1>
          Empowering Businesses <br />
          with Smart Solutions
        </h1>

        <p className="about__desc">
          At Finiit, we combine technology, finance, and innovation to simplify the way businesses operate. Whether you're a startup or an established enterprise, we help you optimize processes, stay compliant, and grow faster with smart digital solutions.
        </p>

        <p className="about__desc">
          Our mission is to streamline your business operations by blending innovative IT solutions, custom software development, and reliable financial services - whether you operate locally or globally.
        </p>

        {/* Button Left Side */}
        <button className="about__btn">
          FREE TRAIL
          <img src={trailArrowIcon} alt="arrow" className="btn-arrow-icon" />
        </button>

      </div>

      {/* RIGHT */}
      <div className="about__right">
        <div className="image-box">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="pattern"></div>
      </div>

    </div>
  );
};

export default About;