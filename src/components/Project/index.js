import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const Project = ({ src, title, tools, repositorie, website, newProject }) => {
  return (
    <div className={styles.Project}>
      <div
        className={styles["Project__background"]}
        style={{ backgroundImage: `url(${src})` }}
      >
        {newProject && <p className={styles["Project__new-text"]}>¡Nuevo!</p>}
        <div className={styles["Project__description"]}>
          <h2>{title}</h2>
          <p className={styles["Project__tools"]}>{tools}</p>
          <div className={styles["Project__links"]}>
            <a
              href={repositorie}
              className={`${styles["Project__link"]} ${styles["Project__icon"]}`}
            >
              Repositorio
              <FontAwesomeIcon
                className={styles["link__icon"]}
                icon={faGithub}
              />
            </a>
            <a href={website} className={styles["Project__link"]}>
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
  );
};

export default Project;
