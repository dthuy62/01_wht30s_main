import React from "react";
import "./BannerProduct.scss";
import bannerProduct from "../../assets/images/bes-bg.png";
import { bestProductList } from "../../utils/data";
import BestProductCard from "./BestProductCard";

const BannerProduct = () => {
  return (
    <div className="banner-best-product w-100 position-relative">
      <div className="banner-best-product__inner">
        <div className="title-container text-center">
          <div className="title-container__title text-uppercase">
            best product
          </div>
          <div className="title-container__desc d-flex justify-content-center">
            <p>
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first{" "}
            </p>
          </div>
        </div>
        <div className="best-product-list">
          <div className="container inner-list d-flex flex-sm-row flex-column">
            {bestProductList.map((item) => (
              <BestProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
