import React from "react";
import ImageVideo from "../../assets/images/video.png";
import hBlackIcon from "../../assets/images/video-object-05.png";
import hOrangeIcon from "../../assets/images/video-object-03.png";
import ImageGray from "../../assets/images/video-object-04.png";
import ImagePink from "../../assets/images/video-object-08.png";
import Icon_Click from "../../assets/images/video-object-02.png";
import Icon_Error from "../../assets/images/video-object-01.png";
import Icon_Heart_Black from "../../assets/images/video-object-06.png";
import IconW from "../../assets/images/video-object-07.png";
import IconInky from "../../assets/images/video-object-09.png";

import "./Video.scss";
import Button from "../Common/Button";

const Video = () => {
  return (
    <div className="video position-relative">
      <div className="video__title text-center">
        <h3 className="text-uppercase">what happened</h3>
        <div className="desc d-flex justify-content-center">
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
        </div>
        <div className="view-more">
          <Button />
        </div>
      </div>

      <div className="video__content-center d-flex mx-auto position-relative">
        <img className="w-100" src={ImageVideo} alt="" />

        <div className="icon-bottom-left position-absolute">
          <img className="w-100" src={hOrangeIcon} alt="" />
        </div>
        <div className="icon-bottom-right position-absolute">
          <img className="w-100" src={Icon_Error} alt="" />
        </div>
        <div className="icon-video-inky position-absolute">
          <img className="w-100" src={IconInky} alt="" />
        </div>
        <div className="icon-video-pink position-absolute">
          <img className="w-100" src={ImagePink} alt="" />
        </div>
      </div>
      <div className="icon-video-top-left position-absolute">
        <img className="w-100" src={hBlackIcon} alt="" />
      </div>
      <div className="icon-video-left position-absolute">
        <img src={ImageGray} alt="" />
      </div>

      <div className="icon-top-right-bottom position-absolute">
        <img className="w-100" src={Icon_Heart_Black} alt="" />
      </div>
      <div className="icon-top-right-top position-absolute">
        <img className="w-100" src={IconW} alt="" />
      </div>
    </div>
  );
};

export default Video;
