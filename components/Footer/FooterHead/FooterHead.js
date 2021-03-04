import React from "react";
import NavigationIcon from "@material-ui/icons/Navigation";
import styles from "./footerHead.module.scss";
import {
  TextField,
  InputBase,
  Paper,
  Divider,
  IconButton,
  Button,
} from "@material-ui/core";
const FooterHead = () => {
  return (
    <div className={styles.footer_head_wrap}>
      <div className="container-fluid">
        <div className="row p-1">
          <div className={`${styles.col_one} col-md-12 col-lg-6`}>
            <div>
              <h3>
                <span>
                  <i>
                    <NavigationIcon />
                  </i>
                </span>
                Sign up for our newsletter
              </h3>
              <p>
                and enjoy <b>-15% off</b> your first purchase!
              </p>
            </div>
          </div>
          <div className={`${styles.col_two} col-md-12-col-lg-6`}>
            <form
              noValidate
              autoComplete="off"
              className={styles.footer_head_form}
            >
              <InputBase
                className={styles.text_field}
                placeholder="Email address"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
