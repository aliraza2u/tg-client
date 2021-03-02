import React from "react";
import { ProductCardData } from "../../../utils/data";
import ProductCard from "../ProductCard";
const ProductsCarousel = () => {
  return (
    <div className="container">
    <div className='row'>
      {ProductCardData?.map((item, index) => {
        return (
          <ProductCard
            key={index}
            productImage={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
    </div>
  );
};

export default ProductsCarousel;
