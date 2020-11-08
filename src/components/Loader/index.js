import React from "react";

import styles from "./styles.module.css";

const Loader = ({ size = "big" }) => (
  <div
    className={`${styles.Loader} ${
      size === "small" ? styles["Loader--small"] : styles["Loader--big"]
    }`}
  >
    <div className={styles["Loader__rect"]}></div>
    <div
      className={`${styles["Loader__rect"]} ${styles["Loader__rect--delay-2"]}`}
    ></div>
    <div
      className={`${styles["Loader__rect"]} ${styles["Loader__rect--delay-3"]}`}
    ></div>
    <div
      className={`${styles["Loader__rect"]} ${styles["Loader__rect--delay-4"]}`}
    ></div>
    <div
      className={`${styles["Loader__rect"]} ${styles["Loader__rect--delay-5"]}`}
    ></div>
  </div>
);

export default Loader;
