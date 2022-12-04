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
          <span className="pr-2">Login</span>
          <span>
            <LockOpen />{" "}
          </span>
        </span>
      </div>
      {/* Wishlist and  AddCart */}
      <div className={styles.carts_wrap}>
        <div className={styles.wishlist}>
          <span>
            <span>
              <FavoriteBorder />{" "}
            </span>
            <span>Wishlist(0)</span>
          </span>
        </div>
        <div className={styles.cartlist}>
          <span>
            <span>
              <ShoppingCart />{" "}
            </span>
            <span>0 item - $0.00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cartbar;
