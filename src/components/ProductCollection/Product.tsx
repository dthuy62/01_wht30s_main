import React from "react";
import "./Product.scss";

interface IProductProps {
  item: {
    id: number;
    image: string;
  };
}

const Product = ({ item }: IProductProps) => {
  const { id, image } = item;
  return (
    <div className="product">
      <div className="product-thumbnail">
        <img
          className="w-100"
          src={require(`../../assets/images/${image}`)}
          alt={image}
        />
      </div>
      <div className="product-content">
        <div className="product-content__title">
          [what happen] How to create
        </div>
        <div className="product-content__desc d-flex justify-content-between align-items-center">
          <div className="price">2,500 won</div>
          <div className="favorites">
            <div className="icon-heart"></div>
            <div className="text">236</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
