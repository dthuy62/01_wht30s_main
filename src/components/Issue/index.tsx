import React from "react";
import { brandList } from "../../utils/data";
import "./Issue.scss";
import IconNext from "../../assets/images/news-img-01.png";

import IconDice_1 from "../../assets/images/icon_dice_1.png";
import IconDice_2 from "../../assets/images/icon_dice_2.png";
import IconCirle from "../../assets/images/icon_circle.png";
import IconHot from "../../assets/images/icon_hot.png";
import IconLol from "../../assets/images/icon_lol.png";

const Issue = () => {
  return (
    <div className="issue">
      <div className="issue__inner position-relative">
        <div className="issue__title text-center">
          <h3 className="text-uppercase">Happened’s issue</h3>
          <div className="desc d-flex justify-content-center">
            <p>
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
          </div>
        </div>

        <div className="issue__list row row-cols-1 row-cols-sm-2 row-cols-md-5  row-cols-xs-5 position-relative me-0">
          <div className="issue-item first">
            <div className="inner">
              <div className="text text-uppercase">
                whpn <br /> issue
              </div>
              <div className="icon-img">
                <img className="w-100" src={IconNext} alt="" />
              </div>
            </div>
          </div>
          {brandList.map((item) => (
            <div key={item.id} className="issue-item">
              <div
                className="issue-item__title text-uppercase"
                style={
                  item.id === 3
                    ? {
                        backgroundColor: "#ff5500",
                      }
                    : { backgroundColor: "#110e03" }
                }
              >
                {item.name}
              </div>
              <div className="issue-item__thumnail">
                <img
                  className="w-100"
                  src={require(`../../assets/images/${item.image}`)}
                  alt={item.image}
                />
              </div>
            </div>
          ))}

          <div className="icon-circle position-absolute">
            <img className="w-100" src={IconCirle} alt="" />
          </div>
          <div className="icon-hot position-absolute">
            <img className="w-100" src={IconHot} alt="" />
          </div>

          <div className="icon-lol position-absolute">
            <img className="w-100" src={IconLol} alt="" />
          </div>
        </div>
        <div className="icon-dices position-absolute">
          <img className="w-100 icon-dices__five" src={IconDice_2} alt="" />
          <img className="w-100 icon_dices__three" src={IconDice_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Issue;
