import React from "react";
import Titlebar from "../../components/Titlebar";
import Navbar from "../../components/Navbar";
import CarouselBar from "../../components/CarouselBar";
import ProductsCarousel from "../../components/Recommended/ProductsCarousel";
import ShopByCategory from "../../components/ShopByCategory";
import SalesProducts from "../../components/SalesProducts";

const Home = () => {
  return (
    <div>
      <Titlebar />
      <Navbar />
      <CarouselBar />
      {/* <ProductsCarousel/> */}
      <ShopByCategory/>
      <SalesProducts/>
    </div>
  );
};

export default Home;
