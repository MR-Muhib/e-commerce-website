import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./shop.css";
import { useNavigate } from "react-router-dom";

const Shophader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const HandleSearch = () => {
    setIsOpen(!isOpen);
  };

  const HandleClickOutside = (event) => {
    if (!searchRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", HandleClickOutside);
    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const HandleArrowClick = () => {
    navigate("/");
  };
  return (
    <div className="shop">
      <div className="shop__hader">
        <FaChevronLeft onClick={HandleArrowClick} />
        <p className="">Catagories</p>
        <div className="">
          <div className="search__field__div">
            {isOpen && <input ref={searchRef} className="search__field" />}
          </div>
          <FaSearch className="search__icon" onClick={HandleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Shophader;
