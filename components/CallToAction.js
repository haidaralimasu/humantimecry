import React, { Component } from "react";

const CallToAction = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__circle-1"></div>
        <div className="cta-one__circle-2"></div>
        <div className="cta-one__circle-3"></div>
        <div className="cta-one__content text-center">
          <h3>Follow us on Twitter</h3>

          <a
            href="https://twitter.com/Qualo_96"
            target="blank"
            className="thm-btn cta-one__btn"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
