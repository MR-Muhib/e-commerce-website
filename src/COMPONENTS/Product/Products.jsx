import React from "react";
import { useParams } from "react-router-dom";
import product from "../ProductApi/Products";
import Navbar from "../Navbar/Navbar";
import "./product.css";

const Products = () => {
  const { id } = useParams();
  const productDetails = product.find((product) => product.id === parseInt(id));
  const { image, name, description, price, category, size, color } =
    productDetails;

  return (
    <div key={id} className="products__container">
      <h1 className="products__title">Product Information</h1>
      <Navbar />
      {
        <div className="products__div">
          <img className="products__image" src={image} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Price: {category}</p>
            <p>Price: {size}</p>
            <p>Price: {color}</p>
            <button className="products__btn">Add to Bag</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Products;
