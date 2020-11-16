import React from "react";

import styles from "./styles.module.css";

const AvatarWhat = ({ src }) => (
  <div className={`${styles.Avatar404} "fadeIn"`}>
    <img src={src} alt="Avatar 404" className={styles["Avatar404__image"]} />
    <h1 className={styles["Avatar404__title"]}>404</h1>
    <p className={styles["Avatar404__paragraph"]}>
      Ups, la página que buscas no se logró encontrar.
    </p>
  </div>
);

export default AvatarWhat;
