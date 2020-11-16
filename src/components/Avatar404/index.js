import React, { useState } from "react";

import Loader from "../Loader";

import styles from "./styles.module.css";

const AvatarWhat = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader />}
      <div
        className={`${loaded ? styles.Avatar404 : "hidden"} "fadeIn"`}
        onLoad={() => setLoaded(true)}
      >
        <img
          src={src}
          alt="Avatar 404"
          className={styles["Avatar404__image"]}
        />
        <h1 className={styles["Avatar404__title"]}>404</h1>
        <p className={styles["Avatar404__paragraph"]}>
          Ups, la página que buscas no se logró encontrar.
        </p>
      </div>
    </>
  );
};

export default AvatarWhat;
