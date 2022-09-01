import React from "react";
import { productList } from "../../utils/data";
import Button from "../Common/Button";
import Product from "./Product";
import "./ProductCollection.scss";

console.log(productList);

const ProductCollection = () => {
  return (
    <div className="container product-container pb-5">
      <div className="product-list d-flex flex-wrap  justify-content-center">
        {productList.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      <div className="view-more text-center">
        <Button />
      </div>
    </div>
  );
};

export default ProductCollection;
