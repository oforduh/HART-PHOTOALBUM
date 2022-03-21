import React from "react";
import styles from "./footer.module.scss";
import footerLogo from "./FooterLogo.jpg";

const Footer = ({ navOpen }) => {
  return (
    <div
      className={
        !navOpen
          ? `${styles.footerParentDiv}`
          : `${styles.footerParentDiv} ${styles.active}`
      }
    >
   
      <span>Copyright © 2022 | All rights reserved</span>
      <img alt="Footer Logo" src={footerLogo} width="30" height="30" />
    </div>
  );
};

export default Footer;
