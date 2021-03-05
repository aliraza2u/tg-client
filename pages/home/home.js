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
import axios from 'axios';

const Home = ({posts}) => {
  console.log("products data", posts)
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

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.data;

  return {
    props: {
      posts,
    },
  };
}
