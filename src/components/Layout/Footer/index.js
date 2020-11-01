import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={`${styles["Footer__wrapper"]} fadeInUp`}>
      <a
        href="https://github.com/mappedev"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["Footer__social-link"]}
      >
        <div className={styles["social-link__icon-wrapper"]}>
          <FontAwesomeIcon
            className={styles["social-link__icon"]}
            icon={faGithub}
          />
        </div>
        <span>Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/mario-jesus-peña-prado-89319a1a9"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["Footer__social-link"]}
      >
        <div className={styles["social-link__icon-wrapper"]}>
          <FontAwesomeIcon
            className={styles["social-link__icon"]}
            icon={faLinkedinIn}
          />
        </div>
        <span>Linkedin</span>
      </a>
      <a
        href="https://twitter.com/mappedev"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["Footer__social-link"]}
      >
        <div className={styles["social-link__icon-wrapper"]}>
          <FontAwesomeIcon
            className={styles["social-link__icon"]}
            icon={faTwitter}
          />
        </div>
        <span>Twitter</span>
      </a>
      <a
        href="mailto:mappedev@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["Footer__social-link"]}
      >
        <div className={styles["social-link__icon-wrapper"]}>
          <FontAwesomeIcon
            className={styles["social-link__icon"]}
            icon={faEnvelope}
          />
        </div>
        <span>Email</span>
      </a>
    </div>
  </footer>
);

export default Footer;
