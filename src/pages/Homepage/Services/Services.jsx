import React from "react";
import "./Services.scss";
import { FaHome, FaGlobe, FaCogs, FaUsers, FaStore, FaShieldAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
  return (
    <div className="services">

      {/* TOP SECTION */}
      <div className="services__top">

        <p className="tag">
          <span>⌃</span> WHAT WE OFFER
        </p>

        <h1>
          From financial compliance to business automation, we <br />
          offer end-to-end services tailored to your needs.
        </h1>

        <div className="services__items">
          
          <div className="item">
            <div className="icon">
              <FaHome />
            </div>
            <p>Domestic Market <br /> Services</p>
          </div>

          <div className="item">
            <div className="icon">
              <FaGlobe />
            </div>
            <p>Global <br /> Services</p>
          </div>

        </div>

        <button className="explore-btn">
          EXPLORE SERVICES
          <FiArrowUpRight className="btn-icon" />
        </button>

      </div>

      {/* BOTTOM SECTION */}
      <div className="services__bottom">

        <p className="tag">
          <span>⌃</span> WHY CHOOSE US
        </p>

        <h2>
          Because we blend technology with financial expertise, <br />
          ensuring your business runs smarter and safer.
        </h2>

        <div className="features">

          <div className="feature">
            <div className="box">
              <FaCogs />
            </div>
            <p>
              All-in-One Solution <br />
              (IT + Finance + Software)
            </p>
          </div>

          <div className="feature">
            <div className="box">
              <FaUsers />
            </div>
            <p>
              Expert Team with <br />
              Practical Experience
            </p>
          </div>

          <div className="feature">
            <div className="box">
              <FaStore />
            </div>
            <p>
              Scalable for <br />
              Local & Global Businesses
            </p>
          </div>

          <div className="feature">
            <div className="box">
              <FaShieldAlt />
            </div>
            <p>
              Reliable, Secure & <br />
              Compliance-Focused
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Services;