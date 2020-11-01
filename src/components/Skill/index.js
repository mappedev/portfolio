import React from "react";

import styles from "./styles.module.css";

const Skill = ({ src, alt, title, inProcess }) => (
  <>
    <figure className={styles["Skill-figure"]}>
      {inProcess && <p className={styles["Skill__process-text"]}>Proceso</p>}
      <img src={src} alt={alt} className={styles["Skill__logo"]} />
      <figcaption className={styles["Skill__logo-description"]}>
        {title}
      </figcaption>
    </figure>
  </>
);

export default Skill;
