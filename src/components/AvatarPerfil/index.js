import React, { useState } from "react";

import Loader from "../Loader";

import styles from "./styles.module.css";

const AvatarPerfil = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader />}
      <div
        className={loaded ? styles["Avatar-perfil"] : "hidden"}
        onLoad={() => setLoaded(true)}
      >
        <img src={src} alt={alt} className={styles["Avatar-perfil__image"]} />
        <h1 className={styles["Avatar-perfil__title"]}>Mario Peña</h1>
      </div>
    </>
  );
};

export default AvatarPerfil;
