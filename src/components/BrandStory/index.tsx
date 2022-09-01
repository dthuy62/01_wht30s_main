import React from "react";
import "./BrandStory.scss";

import blankNoteIcon from "../../assets/images/object-01.png";
import planNoteYellowIcon from "../../assets/images/object-02.png";
import planNoteIcon from "../../assets/images/object-03.png";
import flowerPotIcon from "../../assets/images/object-04.png";
import calendarIcon from "../../assets/images/object-05.png";
import doubleBookIcon from "../../assets/images/object-06.png";
import bookIcon from "../../assets/images/object-07.png";
import mainImage from "../../assets/images/img.png";

const BrandStory = () => {
  return (
    <div className="brand-story position-relative">
      <div className="brand-story__inner">
        <div className="brand-story__title text-center">
          <h3 className="text-uppercase">Brand Story</h3>
          <div className="desc d-flex justify-content-center">
            <p>
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
          </div>
        </div>
        <div className="brand-story__list-icon-left">
          <div className="blank-note-ic position-absolute">
            <img className="w-100" src={blankNoteIcon} alt="" />
          </div>
          <div className="double-book-ic position-absolute">
            <img className="w-100" src={doubleBookIcon} alt="" />
          </div>
          <div className="book-ic position-absolute">
            <img className="w-100" src={bookIcon} alt="" />
          </div>
        </div>

        <div className="brand-story__main-content mx-auto position-relative">
          <div className="lines_brand">
            <div className="line_blue"></div>
            <div className="line_blue"></div>
          </div>
          <div className="content-brand">
            <div className="content-brand__img">
              <img className="w-100 h-100" src={mainImage} alt="" />
            </div>
            <div className="content-brand__text">
              <div className="content-brand__text-title text-uppercase">
                What Happened’s Brand story
              </div>
              <div className="content-brand__text-desc text-uppercase">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </div>
              <div className="view-more">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-story__list-icon-right">
          <div className="calendar-ic position-absolute">
            <img src={calendarIcon} alt="" />
          </div>
          <div className="flower-pot-ic position-absolute">
            <img src={flowerPotIcon} alt="" />
          </div>
        </div>

        <div className="brand-story__list-icon-top">
          <div className="plan-note-yellow-ic position-absolute">
            <img className="w-100" src={planNoteYellowIcon} alt="" />
          </div>
          <div className="plan-note-ic position-absolute">
            <img className="w-100" src={planNoteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
