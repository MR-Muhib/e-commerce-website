import React from "react";
import "./navbar.css";
import { IoMdHome } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="nav__content">
        <NavLink to="/" className="nav__links">
          <IoMdHome className="nav__links__icon" />
          <p className="nav__link__title">Home</p>
        </NavLink>

        <NavLink to="/shop" className="nav__links">
          <MdOutlineShoppingCart className="nav__links__icon" />
          <p className="nav__link__title">Shop</p>
        </NavLink>
        <NavLink className="nav__links">
          <PiShoppingBagOpen className="nav__links__icon" />
          <p className="nav__link__title">bag</p>
        </NavLink>
        <NavLink className="nav__links">
          <GrFavorite className="nav__links__icon" />
          <p className="nav__link__title">Favorites</p>
        </NavLink>
        <NavLink className="nav__links">
          <CgProfile className="nav__links__icon" />
          <p className="nav__link__title">Profile</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
