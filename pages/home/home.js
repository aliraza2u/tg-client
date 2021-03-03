import React from "react";
import Titlebar from "../../components/Titlebar";
import Navbar from "../../components/Navbar";
import CarouselBar from "../../components/CarouselBar";
import ProductsCarousel from "../../components/Recommended/ProductsCarousel";
import ShopByCategory from "../../components/ShopByCategory";
import SalesProducts from "../../components/SalesProducts";
import Brands from "../../components/Brands";

const Home = () => {
  return (
    <div>
      <Titlebar />
      <Navbar />
      <CarouselBar />
      <ProductsCarousel />
      <ShopByCategory />
      <SalesProducts />
      <Brands/>
    </div>
  );
};

export default Home;
