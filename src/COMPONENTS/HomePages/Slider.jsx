import React, { useState } from "react";
import Product from "../ProductApi/Products";
import { Link } from "react-router-dom";
import "./slider.css";

const Slider = () => {
  const [ProductList] = useState(Product); // No need for destructuring here

  return (
    <div className="product__container">
      {ProductList.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`} className="product__links__card">
            <img
              className="product__image"
              src={product.image}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <p className="product__decs">
              {product.description.slice(0, 20)}...
            </p>
            <p>Price: ${product.price}</p>
            <button className="see__more__btn">See more →</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Slider;
