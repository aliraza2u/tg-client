import React from "react";
import styles from "./shopByCategory.module.scss";
import Slider from "react-slick";
import { CategoryCardData } from "../../utils/data";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ShopByCategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className={styles.shop_category_wrap}>
      <div className={styles.category_text_icon}>
        <h4>Shop By Category</h4>
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
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
                      <p>{item.description}</p>
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
