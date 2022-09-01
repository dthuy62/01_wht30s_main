import React from "react";
import { productList } from "../../utils/data";
import Product from "./Product";
import "./ProductCollection.scss";

console.log(productList);

const ProductCollection = () => {
  return (
    <div className="container product-container">
      <div className="product-list d-flex flex-wrap  justify-content-center">
        {productList.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
