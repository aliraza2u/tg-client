import {
  FavoriteBorder,
  LockOpen,
  ShoppingBasket,
  ShoppingCart,
} from "@material-ui/icons";
import React from "react";
import styles from "./titlebar.module.scss";
// import {FavoriteBorderIcon} from '@material-ui/icons';

const Cartbar = () => {
  return (
    <div className={styles.cartbar_wrap}>
      <div className={styles.login}>
        {/* Login Icon */}
        <span>
          <i>Login</i>
          <i>
            <LockOpen />{" "}
          </i>
        </span>
      </div>
      {/* Wishlist and  AddCart */}
      <div className={styles.carts_wrap}>
        <div className={styles.wishlist}>
          <span>
            <i>
              <FavoriteBorder />{" "}
            </i>
            <i>Wishlist(0)</i>
          </span>
        </div>
        <div className={styles.cartlist}>
          <span>
            <i>
              <ShoppingCart />{" "}
            </i>
            <i>0 item - $0.00</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cartbar;
