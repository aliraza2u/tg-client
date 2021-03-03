import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./salesProducts.module.scss";
import { SaleProductsCard } from "../../utils/data";

const SalesProducts = () => {
  return (
    <div className={styles.sales_products_wrap}>
      <Typography variant="h4">Sales</Typography>
      <div className="container-fluid">
        <div className="row">
          {SaleProductsCard?.map((data, index) => {
            return (
                <div className="col-lg-6" style={{ padding: "1px" }}>
                  <div
                    style={{ backgroundImage: `url(${data.image})` }}
                    className={styles.sale_image}
                  >
                    <div className={styles.image_text}>
                      <Typography variant="h5" color="primary">{data.title}</Typography>
                      <Typography>
                        Starting at <h5>${data.price}</h5>
                      </Typography>
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
