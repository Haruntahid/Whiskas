import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Carousel() {
  return (
    <>
      <div className="mx-lg-5 mx-0">
        <OwlCarousel
          className="owl-carousel owl-theme owl-loaded owl-drag"
          loop
          autoplay={true}
          autoplaySpeed={3000}
          autoplayTimeout={3000}
          items={1}
          dots={false}
          nav
        >
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
          <div className="item">
            <img src="../img/banner.png" alt="" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default Carousel;
