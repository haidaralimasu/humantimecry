import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Screenshots = () => {
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
    <div>
      <section className="app-shot-one" id="app-shots">
        <img
          src="/assets/images/shapes/contact-shape-3.png"
          alt=""
          className="app-shot__shape-1"
        />
        <img
          src="/assets/images/shapes/contact-shape-2.png"
          alt=""
          className="app-shot__shape-2"
        />

        <div className="container-fluid">
          <div className="block-title text-center">
            <span className="block-title__bubbles"></span>
            <p></p>
            <h3>Our NFTs</h3>
          </div>
          <div className="app-shot-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <img
                  style={{ height: "500px", width: "350px", borderRadius: 10 }}
                  src="images/2.svg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  style={{ height: "500px", width: "350px", borderRadius: 10 }}
                  src="images/3.svg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  style={{ height: "500px", width: "350px", borderRadius: 10 }}
                  src="images/5.svg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  style={{ height: "500px", width: "350px", borderRadius: 10 }}
                  src="images/6.svg"
                  alt=""
                />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screenshots;
