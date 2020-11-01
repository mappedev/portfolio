import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faTasks,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const Nav = ({ isActive, onClick }) => (
  <>
    <div
      className={
        isActive
          ? `${styles.overlay} ${styles.active} menu-fadeIn`
          : styles.overlay
      }
    />
    <nav className={isActive ? `${styles.Nav} ${styles.active}` : styles.Nav}>
      <ul className={styles.list}>
        <li>
          <Link
            to="/"
            className={
              isActive ? `${styles.link} menu-fadeInRight` : styles.link
            }
            onClick={onClick}
          >
            INICIO
            <FontAwesomeIcon className={styles.icons} icon={faHome} />
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              isActive ? `${styles.link} menu-fadeInRight delay-1` : styles.link
            }
            onClick={onClick}
          >
            SOBRE MÍ
            <FontAwesomeIcon className={styles.icons} icon={faUser} />
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={
              isActive ? `${styles.link} menu-fadeInRight delay-2` : styles.link
            }
            onClick={onClick}
          >
            PROYECTOS
            <FontAwesomeIcon className={styles.icons} icon={faTasks} />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              isActive ? `${styles.link} menu-fadeInRight delay-3` : styles.link
            }
            onClick={onClick}
          >
            CONTACTO
            <FontAwesomeIcon className={styles.icons} icon={faAddressCard} />
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
