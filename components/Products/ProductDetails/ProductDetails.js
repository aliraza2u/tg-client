import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import styles from "./productDetails.module.scss";
import { Button, Icon, IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const ProductDetails = () => {
  const classes = useStyles();

  return (
    <div className={styles.product_details_wrap}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.product_image_wrap} col-md-6`}>
            <Image
            className={styles.product_image}
              src="/watch.webp"
              alt="Product detail image"
              width={500}
              height={500}
            />
          </div>
          <div className={`${styles.product_text_details} col-md-6`}>
            <h4>Quality Watch - Classic Layout</h4>
            <div
              className={`${styles.price_fav}  d-flex justify-content-between align-items-center`}
            >
              <h6>Price: $890.00</h6>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
            <div className={classes.root}>
              <Rating name="size-medium" defaultValue={2} />
            </div>
            <p>Availability: 0 in stock</p>
            <p>Product Type: watch</p>
            <p>Limited Offer Ends In:</p>
            <div className={styles.button_icon_wrap}>
              <div className={styles.count_button}>
                <IconButton>-</IconButton>
                <span className={styles.count_num}>
                  <h6>1</h6>
                </span>
                <IconButton>+</IconButton>
              </div>

              <Button className={styles.add_cart_btn}>Add to cart</Button>
              <Button className={styles.purchase_btn}>Purchase</Button>
            </div>
            <div className={styles.chat_wrap}>
              <IconButton>
                <ChatIcon />
              </IconButton>
              Ask about this product
            </div>
            <div className={styles.share_icons_wrap}>
              Share:
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
