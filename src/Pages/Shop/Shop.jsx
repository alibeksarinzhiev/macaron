import React from "react";
import "./Shop.scss";
import SectionChoose from "./SectionChoose/SectionChoose";
import SwiperBanner from "./Banner/SwiperBanner2";
import OurShop from "./OurShopSection/OurShop.jsx";

const Shop = () => {
  return (
    <>
      <SwiperBanner/>
      <SectionChoose />
      <OurShop/>
    </>
  );
};

export default Shop;
