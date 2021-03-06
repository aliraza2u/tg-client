import { Button, Divider, StylesProvider, TextField } from "@material-ui/core";
import React from "react";
// import TgLogo from '../../../public/assest/logo/tg-logo.jpg';
import Image from "next/image";
import {
  FooterAccount,
  FooterServices,
  FooterContacts,
  FooterInformation,
} from "../../../utils/data";
import styles from "./footerBody.module.scss";

const FooterBody = () => {
  return (
    <div className={styles.footer_body_wrap}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <div>
              <Image
                src="/tg-logo.jpg"
                alt="Tahaif Ghar"
                width={130}
                height={130}
                className={styles.tg_logo}
              />
            </div>
          </div>
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <h6 className="mb-4">My Account</h6>
            {FooterAccount?.map((item, index) => {
              return (
                <ul key={index} className={styles.footer_ul}>
                  <li>{item.title}</li>
                </ul>
              );
            })}
          </div>
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <h6 className="mb-4">Customer Services</h6>
            {FooterServices?.map((item, index) => {
              return (
                <ul key={index} className={styles.footer_ul}>
                  <li>{item.title}</li>
                </ul>
              );
            })}
          </div>
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <h6 className="mb-4">Contact Details</h6>
            {FooterContacts?.map((item, index) => {
              return (
                <div key={index} className={styles.footer_icon_ul}>
                  <span>
                    <i>{item.icon}</i>
                  </span>
                  <ul className={styles.footer_contact_ul}>
                    <li>{item.contactOne}</li>
                    {/* <li>{item.contactTwo}</li> */}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <h6 className="mb-4">Information</h6>
            {FooterInformation?.map((item, index) => {
              return (
                <div key={index}>
                  <ul className={styles.footer_ul}>
                    <li>{item.title}</li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={`${styles.footer_col} col-6 col-md-3 col-lg-2`}>
            <h6 className="mb-4">QUICK CONTACT</h6>
            {/* <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.851747599467!2d74.26421567004802!3d31.40825881621225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900f0e6d1b597%3A0x63ac9c2a5ce26bd4!2sU.E.T.%20Housing%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1614856197776!5m2!1sen!2s"
                width="130"
                height="100"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </p> */}
            <form>
              <TextField
                placeholder="Write your review*"
                // variant="outlined"
                size="small"
                fullWidth
              ></TextField>
              <br />
              <br />
              <Button fullWidth variant="contained" color="primary">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
