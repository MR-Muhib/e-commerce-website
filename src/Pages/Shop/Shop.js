import React, { useState } from "react";
import "./shop.css";
import Shophader from "./ShopHader";
import Navbar from "../../COMPONENTS/Navbar/Navbar.jsx";
import ProductData from "../../COMPONENTS/ProductApi/Products.jsx";
import ProductBody from "./ProductBody.jsx";
import Shopnav from "./Shopnav.jsx";

const Shop = () => {
  const [Product] = useState(ProductData);
  return (
    <div>
      <Shophader />
      <Shopnav />
      {Product.map((product, id) => {
        return (
          <article className="product_data__container" key={id}>
            <ProductBody {...product} />
          </article>
        );
      })}
      <Navbar />
    </div>
  );
};

export default Shop;
