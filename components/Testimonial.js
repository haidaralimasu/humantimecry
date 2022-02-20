import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="testimonials__one" id="testimonials">
      <img
        src="/assets/images/shapes/map-1-1.png"
        alt="Awesome Image"
        className="map-img"
      />
      <img
        src="/assets/images/shapes/testi-shape-1.png"
        alt=""
        className="testimonials__one-shape-1"
      />
      <img
        src="/assets/images/shapes/testi-shape-2.png"
        alt=""
        className="testimonials__one-shape-2"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div id="testimonials-slider-pager">
              <div className="testimonials-slider-pager-two">
                <a
                  style={{ width: 650, marginLeft: 70 }}
                  href="#"
                  className="pager-item active"
                  data-slide-index="0"
                >
                  <img src="/images/globe.svg" alt="Awesome Image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="block-title text-left">
              <span className="block-title__bubbles"></span>
              <p></p>
              <h3>No Matter Who You Are We Welcome You With Open Arms</h3>
            </div>
            <ul className="slider testimonials-slider">
              <Swiper getSwiper={setSwiper}>
                <li className="slide-item">
                  <div className="testimonials__one__single">
                    <p>
                      Owning a Human Time Cry gives you access to rare drops and
                      discounts on QUALO96.com. You will also decide the
                      project's future, like what NFT should be uploaded on the
                      platforms and barnstorming ideas. Our time isn't forever,
                      but being an HTC holder has timeless perks for life.
                    </p>
                    <h3>Quallin Lane</h3>
                  </div>
                </li>
              </Swiper>

              <div className="testimonial_pagination">
                <div
                  className="testimonials-slider-pager-one testimonials-slider-pager-two"
                  onClick={goPrev}
                >
                  <i className="zimed-icon-left-arrow"></i>
                </div>
                <div className="ml-3" onClick={goNext}>
                  <i className="zimed-icon-right-arrow"></i>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
