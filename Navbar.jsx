import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion as m } from "framer-motion";
import logo from "../assets/Logo/Logo .svg";
import menu from "../assets/icon/icon _hamburger menu.svg";

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="navigation container" aria-label="primary">
        <NavLink to="/" className="logo-link">
          <img
            src={logo}
            alt="Little Lemon logo"
            aria-label="On Click"
            id="logo"
          />
        </NavLink>
        
        <div
          className={
            isNavActive ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink to="/" aria-label="On Click" onClick={() => setIsNavActive(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" aria-label="On Click" onClick={() => setIsNavActive(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavHashLink to="/#menu" aria-label="On Click" onClick={() => setIsNavActive(false)}>
                Menu
              </NavHashLink>
            </li>
            <li>
              <NavLink
                smooth
                to="/reservation"
                aria-label="On Click"
                onClick={() => setIsNavActive(false)}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                aria-label="On Click"
                onClick={() => setIsNavActive(false)}
              >
                Order online
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="login" onClick={() => setIsNavActive(false)}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className="hamburger"
          aria-label="On Click"
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
        >
          <img src={menu} className="hamburger-icon" alt="hamburger icon" />
        </button>
      </nav>
    </m.div>
  );
}

export default Navbar;