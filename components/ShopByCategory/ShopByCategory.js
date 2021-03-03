import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./shopByCategory.module.scss";
import Slider from "react-slick";
import { CategoryCardData } from "../../utils/data";

const ShopByCategory = () => {
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
    <div className={styles.shop_category_wrap}>
      <h4 className={styles.shop_category_text}>Shop By Category</h4>
      <Slider {...settings}>
        {CategoryCardData?.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.category_wrap}>
                <div className={styles.category}>
                  <div
                    className={styles.catergory_image}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      padding: "10px",
                    }}
                  >
                    <div className={styles.caterory_text}>
                      <hp>{item.description}</hp>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ShopByCategory;
