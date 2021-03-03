import React from "react";
import styles from "./brands.module.scss";
import Slider from "react-slick";
import { BrandsData } from "../../utils/data";
import Image from "next/image";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Brands = () => {
  var settings = {
    dot: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.brands_wrap}>
      <div className={styles.brands_text_icon}>
        <h3>Brands</h3>
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.brand_slider_wrap}>
        <Slider {...settings}>
          {BrandsData?.map((data, index) => {
            return (
              <div key={index}>
                <img src={data.image} alt="brand icon" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
