import React from "react";
import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <p className="review__tag">⌃ REVIEW</p>
      <h2 className="review__title">
        What our clients say about working with Finiit.
      </h2>

      <div className="review__cards">
        {[1, 2, 3].map((item) => (
          <div className="card" key={item}>
            <div className="card__top">
              <div className="avatar"></div>
              <div>
                <h4>PAVAN JOSHI</h4>
                <span>CEO</span>
              </div>
            </div>

            <p className="card__text">
              At Finiit, we combine technology, finance, and innovation to
              simplify the way businesses operate. Whether you're a startup or
              an established enterprise, we help you optimize processes, stay
              compliant, and grow faster with smart digital solutions.
            </p>

            <div className="stars">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;