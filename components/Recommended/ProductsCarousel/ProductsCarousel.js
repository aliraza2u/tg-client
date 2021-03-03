import React from "react";
import { ProductCardData } from "../../../utils/data";
import ProductCard from "../ProductCard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton, Typography } from "@material-ui/core";
import { Carousel } from "antd";
import styles from "./productsCarousel.module.scss";

const ProductsCarousel = () => {
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

      <Carousel
        aٖutoplay
        key={"new-slider"}
        id="new"
        slidesToShow={4}
        slidesToScroll={1}
        infinite={true}
      >
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
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
