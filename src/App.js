import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import WorkExperiences from "./components/Sections/WorkExperiences";
import Contact from "./components/Sections/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Auth from "./components/Auth/Auth";
import Manage from "./components/Admin/Manage";
import AuthContext from "./store/auth-context";
import { Switch } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
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
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <Auth />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/admin">
            <Manage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
