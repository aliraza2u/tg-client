import React from "react";
import { ProductCardData } from "../../../utils/data";
import ProductCard from "../ProductCard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton, Typography } from "@material-ui/core";
import { Carousel } from "antd";
import Slider from "react-slick";
import styles from "./productsCarousel.module.scss";

const ProductsCarousel = () => {
  var settings = {
    dot: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
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
        <Typography variant="h4" color="textSecondary">
          Recommended Products
        </Typography>
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
          {ProductCardData?.map((data, index) => {
            return (
              <ProductCard
                key={index}
                productImage={data.image}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsCarousel;
