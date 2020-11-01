import React from "react";

import Project from "../Project";

import styles from "./styles.module.css";

import cientifico from "../../assets/rickandmorty.jpg";
import devstagram from "../../assets/devstagram.jpg";
import petsgram from "../../assets/petsgram.jpg";
import portfolio from "../../assets/mappedev.jpg";

const PROJECTS = [
  {
    title: "100tifi.co",
    src: cientifico,
    alt: "Proyecto 100tifi.co",
    repositorie: "https://github.com/mappedev/spa-rickandmortyapi",
    website: "https://mappedev.github.io/spa-rickandmortyapi/",
    tools: "HTML, CSS y Javascript",
    newProject: false,
  },
  {
    title: "Devstagram",
    src: devstagram,
    alt: "Proyecto Devtagram",
    tools: "HTML, CSS y Svelte",
    repositorie: "https://github.com/mappedev/devstagram",
    website: "https://devstagram.netlify.app/",
    newProject: false,
  },
  {
    title: "Petsgram",
    src: petsgram,
    alt: "Proyecto Petsgram",
    tools: "HTML, CSS y React",
    repositorie: "https://github.com/mappedev/petsgram",
    website: "https://petsgram.mappedev.vercel.app/",
    newProject: false,
  },
  {
    title: "Mappedev",
    src: portfolio,
    alt: "Proyecto Mappedev",
    tools: "HTML, CSS y React",
    repositorie: "https://github.com/mappedev/petsgram",
    website: "https://petsgram.mappedev.vercel.app/",
    newProject: true,
  },
];

const ListOfProject = () => (
  <ul className={styles["Projects-grid"]}>
    {PROJECTS.reverse().map((project, index) => (
      <li key={index}>
        <Project
          src={project.src}
          alt={project.alt}
          title={project.title}
          tools={project.tools}
          repositorie={project.repositorie}
          website={project.website}
          newProject={project.newProject}
        />
      </li>
    ))}
  </ul>
);

export default ListOfProject;
