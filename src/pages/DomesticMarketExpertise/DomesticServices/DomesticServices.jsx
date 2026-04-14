import React, { useEffect, useState } from "react";
import "./DomesticServices.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [isSlider, setIsSlider] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);
  const [startIndex, setStartIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

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
    <div className="domestic">
      <div className="domestic__top">
        <p className="domestic__tag">
          <MdKeyboardDoubleArrowUp />
          OUR DOMESTIC SERVICES
        </p>

        <h2>All-in-One Business Support</h2>

        <p className="domestic__desc">
          Managing compliance, taxation, and finances can be complex. Our
          domestic market services are designed to simplify these processes,
          ensuring accuracy, efficiency, and peace of mind.
        </p>
      </div>

      {!isSlider ? (
        <div className="domestic__grid">
          {data.map((title, i) => (
            <div className="domestic__card" key={`${title}-${i}`}>
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

              <div className="card-icon">
                <img src={myIcon} alt="icon" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="domestic__slider">
          <div
            className="domestic__track"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
            }}
          >
            {data.map((title, i) => (
              <div
                className="domestic__slide"
                key={`${title}-${i}`}
                onClick={handleCardClick}
                style={{ minWidth: `${100 / visibleCards}%` }}
              >
                <div className="domestic__card">
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

                  <div className="card-icon">
                    <img src={myIcon} alt="icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isSlider && (
        <div className="domestic__mobile-controls">
          <button
            className="nav-btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={startIndex >= data.length - visibleCards}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default DomesticServices;