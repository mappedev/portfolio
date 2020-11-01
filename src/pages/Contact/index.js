import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const Contact = () => (
  <div className={`${styles.Contact} fadeIn`}>
    <h1 className={styles["Contact__title"]}>
      {/* <span role="img" aria-label="phone">
        &#128222;
      </span>{" "} */}
      ¡CONTÁCTAME!
    </h1>
    <p className={styles["Contact__paragraph"]}>
      <strong>
        Si tienes una oferta de trabajo, una propuesta de proyecto, deseas que
        te asesore o simplemente quieres enviarme un mensaje, lo puedes hacer
        enviandome un{" "}
        <a
          href="mailto:mappedev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["paragraph__link"]}
        >
          correo
          <span className={styles["link__icon"]}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </a>
        . Aprovecho para dejarte mi{" "}
        <a
          href="https://www.linkedin.com/in/mario-jesus-pe%C3%B1a-prado-89319a1a9/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["paragraph__link"]}
        >
          linkedin
          <span className={styles["link__icon"]}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </a>
        .
      </strong>
    </p>

    <p className={styles["Contact__paragraph"]}>
      <strong>
        Si gustas puedes seguirme en{" "}
        <a
          href="https://github.com/mappedev"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["paragraph__link"]}
        >
          github
          <span className={styles["link__icon"]}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>{" "}
        y{" "}
        <a
          href="https://twitter.com/mappedev"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["paragraph__link"]}
        >
          twitter
          <span className={styles["link__icon"]}>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>{" "}
        para que no te pierdas nada del contenido que desarrollo.
      </strong>
    </p>
  </div>
);

export default Contact;
