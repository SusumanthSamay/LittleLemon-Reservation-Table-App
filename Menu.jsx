import React from "react";
import { Link } from "react-router-dom";
import { truncate } from '../utils/index.js'

function Menu({ img, title, price, description }) {
  const descriptionTruincated = truncate(description, 110);

  return (
    <article id="menu" className="menu-card">
      <div className="card-text card-info">
        <h6>{title}</h6>
        <h6 className="price">$ {price}</h6>
      </div>    
      <img src={img} alt={title} className="card-img" />
      <div className="card-text">
        <div className="card-details">
          <p>{descriptionTruincated}</p>
          <Link to="/order-online" className="card-button" aria-label={title}>
            Order & Delivery
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Menu;