import React from "react";
import { Link } from "@reach/router";

import styles from "./styles.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <Link to="/" className={styles["Logo__link"]}>
      MP
    </Link>
  </div>
);

export default Logo;
