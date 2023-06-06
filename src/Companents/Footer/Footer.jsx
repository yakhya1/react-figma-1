import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./CopyRight";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
     <div className={styles.footerLeft}>
      <FooterLogo />
      <FooterMenu /></div>
      <Copyright/>
    </div>
  );
};

export default Footer;