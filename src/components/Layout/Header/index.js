import React from "react";

import styles from "./styles.module.css";

const Header = ({ children, isVisible }) => (
  <header
    className={isVisible ? `${styles.Header} ${styles.visible}` : styles.Header}
  >
    {children}
  </header>
);

export default Header;
