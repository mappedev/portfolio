import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";
import avatar from "../../assets/avatar.png";

const Hero = () => (
  <div className={`${styles.Hero} fadeIn`}>
    <img className={styles["Hero__image"]} src={avatar} alt="Perfil" />
    <h1 className={styles["Hero__title"]}>Mario Peña</h1>
    <span className={styles["Hero__description"]}>
      Hola, me apasiona el gran mundo web, especialmente el desarrollo frontend.
    </span>
    <Link to="/projects" className={styles["Hero__link"]}>
      Ver los proyectos en los que me encuentro trabajando o he hecho
      <FontAwesomeIcon
        icon={faArrowRight}
        className={styles["link__arrow-icon"]}
      />
    </Link>
  </div>
);

export default Hero;
