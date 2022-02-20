import React from "react";

const Faq = () => {
  return (
    <section className="faq-one">
      <img
        src="/assets/images/shapes/faq-shape-1.png"
        alt=""
        className="faq-one__shape-1"
      />
      <img
        src="/assets/images/shapes/faq-shape-2.png"
        alt=""
        className="faq-one__shape-2"
      />
      <img
        src="/assets/images/shapes/faq-shape-3.png"
        alt=""
        className="faq-one__shape-3"
      />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Human Time Cry</p>
          <h3>Roadmap</h3>
        </div>
        <div className="accrodion-grp wow fadeIn faq-accrodion animated">
          <div className="accrodion">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>
                  We will giveaway a few Human Time Cries to our community.
                </h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion  ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>All HTC holders will receive a profit share.</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>
                  Q96 is all about providing helping hands to others. We will
                  donate to Make-A-Wish Foundation to support active patients.
                </h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>
                  Q96 Forever Cashback program takes effect. Each month one
                  lucky HTC holder of the community will receive a 0.01 ETH
                  deposit in their wallet.
                </h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
