import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";

import Loader from "../Loader";

import styles from "./styles.module.css";

const Project = ({ src, title, tools, repositorie, website, newProject }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader />}
      <div
        className={loaded ? styles.Project : "hidden"}
        onLoad={() => setLoaded(true)}
      >
        <div className={styles["Project__wrapper"]}>
          <img src={src} alt="Proyecto" className={styles["Project__image"]} />
          {newProject && <p className={styles["Project__new-text"]}>¡Nuevo!</p>}
          <div className={styles["Project__description"]}>
            <h2>{title}</h2>
            <p className={styles["description__tools"]}>{tools}</p>
            <div>
              <a
                href={repositorie}
                className={`${styles["description__link"]} ${styles["Project__icon"]}`}
              >
                Repositorio
                <FontAwesomeIcon
                  className={styles["link__icon"]}
                  icon={faGithub}
                />
              </a>
              <a href={website} className={styles["description__link"]}>
                Sitio web
                <FontAwesomeIcon
                  className={styles["link__icon"]}
                  icon={faPager}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
