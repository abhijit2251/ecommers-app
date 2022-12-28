import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="Product">
      <div className="product-img">
        <img src={product.imgURL} alt="product img" />
      </div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
