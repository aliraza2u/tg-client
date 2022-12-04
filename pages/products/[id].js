import React from "react";
import DetailsTab from "../../components/Products/DetailsTab";
import ProductDetails from '../../components/Products/ProductDetails/index';
import ProductsCarousal from '../../components/Recommended/ProductsCarousel'
const ProductDetailsId = () => {
  return (
    <div>
      <ProductDetails/>
      <DetailsTab/>
      <ProductsCarousal/>
    </div>
  );
};

export default ProductDetailsId;
