import React from "react";
import styles from "./salesProducts.module.scss";
import { SaleProductsCard } from "../../utils/data";

const SalesProducts = () => {
  return (
    <div className={styles.sales_products_wrap}>
      <h4 variant="h4">Sales</h4>
      <div className="container-fluid">
        <div className="row">
          {SaleProductsCard?.map((data, index) => {
            return (
              <div className="col-lg-6" style={{ padding: "1px" }} key={index}>
                <div
                  style={{ backgroundImage: `url(${data.image})` }}
                  className={styles.sale_image}
                >
                  <div className={styles.image_text}>
                    <h5>{data.title}</h5>
                    Starting at <h5>${data.price}</h5>
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
