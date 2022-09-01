import React from "react";
import mainBanner from "../../assets/images/what-happened-market.png";
import iconNext from "../../assets/images/icon-next.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner__title text-uppercase text-center mb-5">
          launching open event!
        </div>
        <div className="banner__bg">
          <img src={mainBanner} alt="banner-bg" />
        </div>
        <div className="banner__footer d-lg-flex d-flex flex-lg-row flex-column gap-3 gap-lg-0 justify-content-between align-items-center mt-5">
          <div className="banner__footer-content left text-uppercase">
            Lorem Ipsum
          </div>
          <div className="banner__footer-content-icon">
            <img src={iconNext} alt="icon-next" />
          </div>
          <div className="banner__footer-content center">
            <span className="text-uppercase">
              market <br className="br-show" />
              launching!
            </span>
          </div>
          <div className="banner__footer-content-icon">
            <img src={iconNext} alt="icon-next" />
          </div>
          <div className="banner__footer-content right text-uppercase">
            Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
