import React from "react";
import { Link } from "react-router-dom";
import "./shopbody.css";

const ProductBody = (product) => {
  // Destructure the product object to get the required properties
  const { image, name, description, price, category, size, color } = product;

  return (
    <div className="products__item__container">
      <div className="product__image__container">
        <h3>{category}</h3>
        <img className="product__image" src={image} alt={name} />
      </div>

      {/* <div className="product__details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
      </div>
      <button className="product__button">Add to Cart</button>
      <button className="product__button">View Details</button>
      <button className="product__button">Share on Facebook</button>
      <button className="product__button">Share on Twitter</button>
      <button className="product__button">Share on Instagram</button>
      <button className="product__button">Share on Pinterest</button> */}
    </div>
  );
};

export default ProductBody;
