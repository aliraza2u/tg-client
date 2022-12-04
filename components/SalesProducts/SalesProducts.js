import React from "react";
import styles from "./salesProducts.module.scss";
import { SaleProductsCard } from "../../utils/data";

const SalesProducts = () => {
  return (
    <div className={styles.sales_products_wrap}>
      <h2 className={styles.sales_product_text}>Sales</h2>
      <div className="container-fluid">
        <div className="row">
          {SaleProductsCard?.map((data, index) => {
            return (
              <div className={`${styles.product_warp} col-lg-6`} key={index}>
                <div
                  style={{ backgroundImage: `url(${data.image})` }}
                  className={styles.sale_image}
                >
                  <div
                    className={`${styles.image_text_wrap} d-flex align-items-center  ${
                      index % 2 === 0 ? `justify-content-end ${styles.primary_text}` : `justify-content-start`
                    } ` }
                    
                  >
                  <div className={styles.image_text}>
                    <h4>{data.title}</h4>
                     <p> Starting at</p> <h5>${data.price}</h5>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesProducts;
