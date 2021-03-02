import React from "react";
import Titlebar from "../../components/Titlebar";
import Navbar from "../../components/Navbar";
import CarouselBar from "../../components/CarouselBar";
import ProductCard from "../../components/Recommended/ProductCard";
import ProductsCarousel from "../../components/Recommended/ProductsCarousel";

const Home = () => {
  return (
    <div>
      <Titlebar />
      <Navbar />
      <CarouselBar />
      {/* <ProductCard  /> */}
      <ProductsCarousel/>
    </div>
  );
};

export default Home;
