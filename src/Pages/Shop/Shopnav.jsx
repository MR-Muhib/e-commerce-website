import React from "react";
import { Link } from "react-router-dom";

const Shopnav = () => {
  return (
    <div className="product__Category__links">
      <Link className="caragory__links" to="#">
        Women
      </Link>
      <Link className="caragory__links" to="#">
        Men
      </Link>
      <Link className="caragory__links" to="#">
        Kids
      </Link>
    </div>
  );
};

export default Shopnav;
