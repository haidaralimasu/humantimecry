import React, { Component } from "react";

const CallToAction = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__circle-1"></div>
        <div className="cta-one__circle-2"></div>
        <div className="cta-one__circle-3"></div>
        <div className="cta-one__content text-center">
          <h3>
            Mint Your HTC Today & <br /> be part of amazing community
          </h3>

          <a
            href="https://www.facebook.com/Q96LLC"
            target="blank"
            className="thm-btn cta-one__btn"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
