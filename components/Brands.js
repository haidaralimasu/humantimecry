import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Brands = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 3,
      },

      575: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="brand-one brand-one__home-one">
      <div className="container">
        <div className="brand-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <img src="/images/1.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/2.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/3.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/5.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/12.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/1.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/2.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/3.svg" alt="" />
            </div>
            <div className="item">
              <img src="/images/5.svg" alt="" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Brands;
