import React from "react";
import "./Hero.scss";
import heroImg from "../../../assets/Hero/Hero1.png";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="hero__overlay"></div>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__tag">⌃ INVEST IN OPPORTUNITY</p>

        <h1>
          Everything your business <br />
          needs <span>IT, software,</span> & <span>finance</span> <br />
          right at your fingertips.
        </h1>

        <p className="hero__desc">
          We are a new-age startup with a team of qualified and experienced professionals.
        </p>

        <button className="hero__btn">
          GET STARTED
          <span className="arrow">↗</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;