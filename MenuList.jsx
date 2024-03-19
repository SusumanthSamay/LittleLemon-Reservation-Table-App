import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import menuData from "../data/menu";

function MenuList() {
  const menuElements = menuData.map((menu) => {
    return (
      <Menu
        key={menu.id + 1}
        {...menu}
      />
    );
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="container container-gap">
        <div className="menus-container">
          <div className="menus-info">
            <h2>This week Specials</h2>
            <Link to="/" className="menu-link">
              See whole online menu
            </Link>
          </div>
          <div className="menus-cards">{menuElements}</div>
        </div>
      </div>
    </m.div>
  );
}

export default MenuList;