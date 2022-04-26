import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import WorkExperiences from "./components/Sections/WorkExperiences";
import Contact from "./components/Sections/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <About />
        <Projects />
        <Skills />
        <WorkExperiences />
        <Contact />
      </Route>
      <Route path="/project-details/:id">
        <ProjectDetails />
      </Route>
      <Route path="/auth">
        <Auth/>
      </Route>
    </Layout>
  );
}

export default App;
