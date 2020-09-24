import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";

const Nav = ({ isActive, onClick }) => (
  <>
    <nav className={isActive ? `${styles.Nav} ${styles.active}` : styles.Nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" onClick={onClick}>
            <h2>INICIO</h2>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClick}>
            <h2>SOBRE MÍ</h2>
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={onClick}>
            <h2>PROYECTOS</h2>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClick}>
            <h2>CONTACTO</h2>
          </Link>
        </li>
        <li className={styles["social-links"]}>
          <a
            href="https://github.com/mappedev"
            rel="noopener noreferrer"
            target="_blank"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-jesus-peña-prado-89319a1a9"
            rel="noopener noreferrer"
            target="_blank"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/mappedev"
            rel="noopener noreferrer"
            target="_blank"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/mappedev"
            rel="noopener noreferrer"
            target="_blank"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
