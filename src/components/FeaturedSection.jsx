import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { ProductsContext } from "../contexts/ProductsContext";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="FeaturedSection">
      <h1>Featured Collection</h1>
      <div className="products-container">
        {products?.map((product) => {
          return product.id <= 4 ? (
            <Product product={product} key={product.id} />
          ) : (
            ""
          );
        })}
      </div>
      <Link>
        <button className="view-products-btn">View All Products</button>
      </Link>
    </div>
  );
};

export default FeaturedSection;
