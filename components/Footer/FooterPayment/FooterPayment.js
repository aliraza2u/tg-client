import React from "react";
import styles from "./footerPayment.module.scss";

const FooterPayment = () => {
  return (
    <>
    <div className={styles.footer_payment_wrap}>
      <h6>100% Secure & Trusted Payment</h6>
      <p>
        Need help? Call us at <b> +92-320-662-5492 </b> for any assistance
        required.
      </p>

      <div>
        <img
          src="https://iconape.com/wp-content/png_logo_vector/jazz-cash-logo.png"
          alt="jazzcash icon"
          className={styles.jazzcash_icon}
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2017/06/VISA-logo.png"
          alt="visa icon"
          className={styles.jazzcash_icon}
        />
        <img
          src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-3-2/128/Cash_on_delivery-128.png"
          alt="cash on delivery icon"
          className={styles.self_icon}
        />
      </div>
    </div>
    <div className={styles.copyrights}>
    <p>
        Copyright &#169; 2021 Tahaif Ghar, All rights reserved.{" "}
      </p>
    </div>
    </>
  );
};

export default FooterPayment;
