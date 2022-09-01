import React from "react";
import bannerIntroduction from "../../assets/images/introduction-bg.png";
import "./BannerIntroduction.scss";
const BannerIntroduction = () => {
  return (
    <div className="banner-introduction position-relative">
      <img
        className="banner-introduction__bg position-absolute w-100 h-100"
        src={bannerIntroduction}
        alt="introduction-bg"
      />
      <div className="container">
        <div className="banner-introduction__content">
          <div className="title text-uppercase">what happened!</div>
          <div className="desc">
            How to create mobile-optimized videos in minutes. Not a designer,{" "}
            <br />
            every team makes a lot of videos Can be trimmed. Take the first{" "}
            <br /> step to your brand's success. How to create <br />{" "}
            mobile-optimized videos in minutes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerIntroduction;
