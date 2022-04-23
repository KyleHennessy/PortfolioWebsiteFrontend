import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import WorkExperiences from "./components/Sections/WorkExperiences";
import Contact from "./components/Sections/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Layout>
      {/* <Switch>
                <Route path="/" exact>
                    <AllProjectsPage/>
                </Route>
                <Route path="/about-me">
                    <AboutMePage/>
                </Route>
            </Switch> */}

      
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
    </Layout>
  );
}

export default App;
