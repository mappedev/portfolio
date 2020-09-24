import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <a
      href="https://github.com/mappedev"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithubSquare} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/mario-jesus-peña-prado-89319a1a9"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a
      href="https://twitter.com/mappedev"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
    </a>
    <a
      href="https://www.instagram.com/mappedev/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
    </a>
  </footer>
);

export default Footer;
