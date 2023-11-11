import React from "react";
import pancake1 from "../media/pancake.jpg";
import steak1 from "../media/steak.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src={pancake1} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={steak1} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
