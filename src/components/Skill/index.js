import React, { useState } from "react";

import Loader from "../Loader";

import styles from "./styles.module.css";

const Skill = ({ src, alt, title, inProcess }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader size="small" />}
      <figure
        className={loaded ? styles["Skill-figure"] : "hidden"}
        onLoad={() => setLoaded(true)}
      >
        {inProcess && <p className={styles["Skill__process-text"]}>Proceso</p>}
        <img src={src} alt={alt} className={styles["Skill__logo"]} />
        <figcaption className={styles["Skill__logo-description"]}>
          {title}
        </figcaption>
      </figure>
    </>
  );
};

export default Skill;
