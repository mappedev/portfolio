import React from "react";
import { Link } from "@reach/router";

import LogoSvg from "./LogoSvg";

import styles from "./styles.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <Link to="/" className={styles["Logo__link"]}>
      <LogoSvg />
    </Link>
  </div>
);

export default Logo;
