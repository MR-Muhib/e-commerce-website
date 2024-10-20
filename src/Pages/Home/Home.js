import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import "./home.css";
import image from "../Images/Big Banner.png";
import Slider from "../../COMPONENTS/HomePages/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home__container">
        <div className="home__banner">
          <img className="home__big__banner" src={image} alt="big__banner" />
          <div className="home__banner__title">
            <h3 className="home__title">Fashion Sale</h3>
            <button className="home__button">Check</button>
          </div>
        </div>

        <div className="home__content">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
