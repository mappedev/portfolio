import React from "react";

import Skill from "../Skill";

import styles from "./styles.module.css";

import htmlLogo from "../../assets/html-logo.png";
import cssLogo from "../../assets/css-logo.png";
import sassLogo from "../../assets/sass-logo.png";
import jsLogo from "../../assets/js-logo.png";
import gitLogo from "../../assets/git-logo.png";
import reactLogo from "../../assets/react-logo.png";
import svelteLogo from "../../assets/svelte-logo.png";

const SKILLS = [
  {
    src: htmlLogo,
    alt: "Logo HTML",
    title: "HTML",
    inProcess: false,
  },
  {
    src: cssLogo,
    alt: "Logo CSS",
    title: "CSS",
    inProcess: false,
  },
  {
    src: sassLogo,
    alt: "Logo SASS",
    title: "SASS",
    inProcess: true,
  },
  {
    src: jsLogo,
    alt: "Logo JS",
    title: "Javascript",
    inProcess: false,
  },
  {
    src: reactLogo,
    alt: "Logo React",
    title: "React",
    inProcess: true,
  },
  {
    src: svelteLogo,
    alt: "Logo Svelte",
    title: "Svelte",
    inProcess: true,
  },
  {
    src: gitLogo,
    alt: "Logo Git",
    title: "Git",
    inProcess: false,
  },
];

const ListOfSkills = () => (
  <ul className={styles["Skills-grid"]}>
    {SKILLS.map((skill, index) => (
      <li key={index}>
        <Skill
          src={skill.src}
          alt={skill.alt}
          title={skill.title}
          inProcess={skill.inProcess}
        />
      </li>
    ))}
  </ul>
);

export default ListOfSkills;
