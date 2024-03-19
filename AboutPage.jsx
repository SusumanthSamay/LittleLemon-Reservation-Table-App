import React from "react";
import { motion as m } from "framer-motion";
import img1 from "../assets/image/restaurant.jpg";
import img2 from "../assets/image/restaurant chef B.jpg";

function AboutPage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="container container-gap">
        <div className="about-container">
          <div className="about-text">
            <div className="about-copy">
              <h4>About Us</h4>
              <h2>Little Lemon Restaurant</h2>
              <h3>Berbenue, Island</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus repellat, nihil voluptatum, dolor quo mollitia
                adipisci assumenda ex eos magni incidunt nulla. Blanditiis
                molestias ratione natus pariatur eligendi rem tenetur.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ipsa dolorem tempore quo laudantium temporibus vero
                accusantium doloremque autem id maxime inventore aperiam, nobis
                quia delectus nam, ut quae expedita?
              </p>
            </div>
          </div>
          <div className="about-imgs">
            <img src={img1} alt="Little Lemon Restorant" className="about-img" />
            <img src={img2} alt="Little Lemon Chefs" className="about-img" />
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default AboutPage;