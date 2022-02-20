import React from "react";

const FeaturesOne = () => {
  return (
    <div className="cta-three">
      <img
        src="/assets/images/shapes/cta-1-shape-2.png"
        alt=""
        className="cta-three__shape-2"
      />
      <img
        src="/assets/images/shapes/cta-1-shape-3.png"
        alt=""
        className="cta-three__shape-3"
      />
      <div className="container">
        <img
          src="/assets/images/shapes/cta-1-shape-1.png"
          alt=""
          className="cta-three__shape-1"
        />
        <img
          src="/images/4.svg"
          style={{ width: 600, marginTop: 200 }}
          alt=""
          className="cta-three__moc"
        />
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-three__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <h3>Our Story</h3>
              </div>
              <div className="cta-three__box-wrap">
                <div className="cta-three__box">
                  <div className="cta-three__box-content">
                    <h3></h3>
                    <p>
                      Life brings moments where you have happy, inferior, and
                      depressive emotions; And because of this, we have lows and
                      highs in our life, and I want you to know that you can get
                      through anything. Always believe in yourself and your game
                      plan. You have every right to be here and live the way you
                      choose, but be mindful of one another as well. Don't be
                      sad or angry, be happy because life is such a beautiful
                      gift. I want you to realize this because our time on
                      earth; is declining as life progresses. So, we must live
                      our lives to their fullest potential. Just as you feel
                      like giving up, take a look at your previous step, and
                      realize that you are one step closer to your goal. Time is
                      the most valuable thing a person can have, and I would
                      like you to make use of every second. There are a total of
                      10,000 NFTs in our collection.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://twitter.com/Qualo_96"
                target="blank"
                className="thm-btn cta-three__btn"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesOne;
