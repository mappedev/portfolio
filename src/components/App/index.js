import React from "react";
import { Router } from "@reach/router";

import Layout from "../Layout";
import Home from "../../pages/Home";
import AboutMe from "../../pages/AboutMe";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

const App = () => (
  <>
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <AboutMe path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
    </Layout>
  </>
);

export default App;
