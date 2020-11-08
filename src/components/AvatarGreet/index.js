import React, { useState } from "react";

import Loader from "../Loader";

import styles from "./styles.module.css";

const AvatarGreet = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader />}
      <div
        className={loaded ? styles["Avatar-greet"] : "hidden"}
        onLoad={() => setLoaded(true)}
      >
        <img src={src} alt={alt} className={styles["Avatar-greet__image"]} />
        <p className={styles["Avatar-greet__text"]}>
          Hola, me llamo Mario Peña, gracias por visitar mi sitio web.
        </p>
      </div>
    </>
  );
};

export default AvatarGreet;
