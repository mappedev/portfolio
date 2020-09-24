import React from "react";

import styles from "./styles.module.css";

const BurgerButton = ({ isActive, onClick }) => (
  <button
    className={isActive ? `${styles.Button} ${styles.active}` : styles.Button}
    onClick={onClick}
  >
    <div className={styles.icon}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
);

export default BurgerButton;
