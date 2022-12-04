import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
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
      <div className="container">
        <div className="row py-4">
          <div className={`${styles.col_one} col-md-12 col-lg-7`}>
            <div className="d-flex align-items-center">
              <span className="pr-2">
                <i>
                  <TelegramIcon fontSize="large" />
                </i>
              </span>
              <h5 className="m-0">
                Sign up for our newsletter <br />
                <small>and enjoy <b>-15% off</b> your first purchase!</small>
              </h5>
            </div>
          </div>
          <div className={`${styles.col_two} col-md-12 col-lg-5`}>
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
