import React from "react";

import ListOfSKills from "../../components/ListOfSkills";

import styles from "./styles.module.css";

import avatarGreet from "../../assets/avatar-greet.png";
import platziLogo from "../../assets/platzi-logo.png";

const AboutMe = () => (
  <>
    <div className={`${styles.AboutMe} fadeIn`}>
      <h3 className={styles["AboutMe__title"]}>Sobre mí</h3>
      <h1 className={styles["AboutMe__name"]}>Mario Peña</h1>
      <div className={styles["AboutMe__avatar-wrapper"]}>
        <img
          src={avatarGreet}
          alt="Avatar saludando"
          className={styles["AboutMe__avatar"]}
        />
        <p className={styles["AboutMe__greet"]}>
          Hola, me llamo Mario Peña, gracias por visitar mi sitio web.
        </p>
      </div>
      <section className={styles["AboutMe__section"]}>
        <h3 className={styles["AboutMe__title"]}>¿Quién soy?</h3>
        <p className={styles["AboutMe__paragraph"]}>
          Soy un desarrollador web frontend de Venezuela, apasionado por el
          extenso mundo de la web y siempre interesado en aprender nuevas
          tecnologías. Constantemente busco actualizar mi conocimiento y
          aprender, para lograrlo principalmente estudio en plataformas de
          educación en línea cómo{" "}
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
              className={styles["paragraph__img"]}
            />
          </a>
          .
        </p>
        <p className={styles["AboutMe__paragraph"]}>
          Me gusta mucho compartir el conocimiento que tengo, soy partidario de
          que el que enseña aprende más y lo he comprobado pues en ocasiones he
          dado varias clases y conferencias sobre el desarrollo web.
        </p>
        <p className={styles["AboutMe__paragraph"]}>
          En estos momentos me encuentro especializandome completamente en el
          frontend, pues me gusta mucho la creación de interfaces y agregarles
          una interacción limpia para que el usuario tenga una gran experiencia.
        </p>
      </section>
      <div className={styles["AboutMe__section"]}>
        <h3 className={styles["AboutMe__title"]}>Mis habilidades</h3>
        <ListOfSKills />
      </div>
    </div>
  </>
);

export default AboutMe;
