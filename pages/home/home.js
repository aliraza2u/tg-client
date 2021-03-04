import React from "react";
import Titlebar from "../../components/Titlebar";
import Navbar from "../../components/Navbar";
import CarouselBar from "../../components/CarouselBar";
import ProductsCarousel from "../../components/Recommended/ProductsCarousel";
import ShopByCategory from "../../components/ShopByCategory";
import SalesProducts from "../../components/SalesProducts";
import Brands from "../../components/Brands";
import FooterHead from "../../components/Footer/FooterHead";
import FooterBody from "../../components/Footer/FooterBody";
import FooterPayment from "../../components/Footer/FooterPayment";

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
      <FooterHead/>
      <FooterBody/>
      <FooterPayment/>
    </div>
  );
};

export default Home;
