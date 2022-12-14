import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";
import Slider from "react-slick";
import styles from "./productsCarousel.module.scss";
import axios from "axios";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://tahaifghar-api.herokuapp.com/api/v1/product")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setProducts(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.product_carousel_wrap}>
      <div className={styles.text_icons}>
        <h4>Recommended Products</h4>
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>

      <div style={{ padding: "25px" }}>
        <Slider {...settings}>
          {products?.map((data, index) => {
            return (
              <ProductCard
                key={index}
                productImage={data.image_url}
                title={data.name}
                description={data.description}
                price={data.unit_price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default ProductsCarousel;
