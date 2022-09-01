import React from "react";
import Icon from "../../assets/images/producticon-bg.png";
import goIcon from "../../assets/images/go-icon.png";
import "./BestProductCard.scss";
interface IBestProductProps {
  item: {
    id: number;
    image: string;
    content: string;
  };
}

const BestProductCard = ({ item }: IBestProductProps) => {
  const { id, image, content } = item;
  return (
    <div className="best-product-card  position-relative">
      <div className="best-product-card__label position-absolute">
        <img className="label-icon" src={Icon} alt="" />
        <div className="label-number position-absolute">{`0${id}`}</div>
      </div>
      <div className="best-product-card__thumbnail">
        <img
          src={require(`../../assets/images/${image}`)}
          className="w-100"
          alt=""
        />
      </div>
      <div className="best-product-card__footer d-flex justify-content-between align-items-center position-absolute start-50 mx-auto">
        <div className="text">{content}</div>
        <div className="btn-go">
          <img src={goIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
