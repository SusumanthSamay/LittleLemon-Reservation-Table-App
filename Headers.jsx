import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import heroIMG from "../assets/image/restauranfood.jpg";

function Headers() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <header>
        <div className="container">
          <div className="header-container">
            <div className="header-text">
              <h1>Little Lemon Restaurant</h1>
              <h4>Berbeneu, Island</h4>
              <p className="header-paragraph">
                Lorem ipsum dolor sit amet consectetur. Ut porttitor sagittis a arcu ultrices. Nec volutpat nullam ultrices at dui adipiscing aliquam faucibus. Venenatis tortor fringilla cursus condimentum senectus quam viverra auctor sed. Massa suspend.
              </p>
              <Link className="btn btn-primary" to="/reservation">
                Reserve a table
              </Link>
            </div>
            <div className="hero-img">
              <img
                src={heroIMG}
                alt="Little Lemon Chef"
                className="header-img"
              />
              <p>Simple, but characteristic...</p>
            </div>
          </div>
        </div>
      </header>
    </m.div>
  );
}

export default Headers;