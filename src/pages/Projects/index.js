import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ListOfProject from "../../components/ListOfProjects";

import styles from "./styles.module.css";

import platziLogo from "../../assets/platzi-logo.png";

const Projects = () => (
  <div className={`${styles.Projects} fadeIn`}>
    <h3 className={styles["Projects__title1"]}>Mis</h3>
    <h1 className={styles["Projects__title2"]}>Proyectos</h1>
    <p className={styles["Projects__paragraph"]}>
      <span
        role="img"
        aria-label="magnifying-glass"
        className={styles["paragraph__emoji-search"]}
      >
        &#128270;
      </span>
      Aquí vas a encontrar algunos de mis proyectos prácticos para los cursos
      realizados en{" "}
      <a
        href="https://platzi.com/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["paragraph__link"]}
      >
        Platzi{" "}
        <img
          src={platziLogo}
          alt="Logo Platzi"
          className={styles["paragraph__img-platzi"]}
        />
      </a>{" "}
      y algunos de mis proyectos reales. Si deseas ver todos mis proyectos te
      invito a visitar mi{" "}
      <a
        href="https://github.com/mappedev"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["paragraph__link"]}
      >
        Repositorio en github{" "}
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      .
    </p>
    <ListOfProject />
  </div>
);

export default Projects;
