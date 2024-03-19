import React from "react";
import emptyStar from "../assets/icon/star_linear.svg";
import star from "../assets/icon/star1_bold.svg";

function testimonial({ img, testimonial, user, rating, profession }) {
  return (
    <div className="testimonial-card">
      <div className="stars-rating">
        <img
          src={rating >= 1 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 2 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 3 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 4 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 5 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
      </div>
      <div className="testi-info">
        <img src={img} alt={user} className="testi-img" />
        <div className="testi-profile">
          <h5 className="testi-name">{user}</h5>
          <p className="highlighted">{profession}</p>
        </div>
      </div>
      <p className="testi-text">{testimonial}</p>
    </div>
  );
}

export default testimonial;