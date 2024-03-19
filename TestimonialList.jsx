import React from "react";
import { motion as m } from "framer-motion";
import Testimonial from "./Testimonial";
import testimonialData from "../data/testimonials";

function TestimonialList() {
  const testimonialElements = testimonialData.map((testimonial) => {
    return (
      <Testimonial
        key={testimonial.id}
        {...testimonial}
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
      <div className="testimonialList-container">
        <div className="container">
          <div className="testimonialList">
            <h2>Testimonials</h2>
            <div className="testimonials">{testimonialElements}</div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default TestimonialList;