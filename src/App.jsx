import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import WorkExperiences from "./components/Sections/WorkExperiences";
import Contact from "./components/Sections/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Auth from "./components/Auth/Auth";
import ManageList from "./components/Admin/ManageList";
import AuthContext from "./store/auth-context";
import { Switch } from "react-router-dom";
import ManageProjects from "./components/Admin/ManageProjects/ManageProjects";
import CreateUpdateProject from "./components/Admin/ManageProjects/CreateUpdateProject/CreateUpdateProject";
import CreateSkill from "./components/Admin/ManageSkills/CreateSkill/CreateSkill";
import ManageSkills from "./components/Admin/ManageSkills/ManageSkills";
import ManageMessages from "./components/Admin/ManageMessages/ManageMessages";
import ManageWorkExperiences from "./components/Admin/ManageWorkExperiences/ManageWorkExperiences";
import CreateUpdateWorkExperience from "./components/Admin/ManageWorkExperiences/CreateUpdateWorkExperience/CreateUpdateWorkExperience";

function App() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation.pathname]);

  return (
    <Layout>
      <div className={`page-transition ${transitionStage}`}>
        <Switch location={displayLocation}>
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
          {authCtx.isLoggedIn && [
            <Route path="/admin" key="admin">
              <ManageList />
            </Route>,
            <Route path="/manage-projects" key="manage-projects">
              <ManageProjects />
            </Route>,
            <Route path="/create-update-project/:id?" key="create-update-project">
              <CreateUpdateProject />
            </Route>,
            <Route path="/manage-skills" key="manage-skills">
              <ManageSkills />
            </Route>,
            <Route path="/create-skill" key="create-skill">
              <CreateSkill />
            </Route>,
            <Route path="/manage-work-experiences" key="manage-work-experiences">
              <ManageWorkExperiences />
            </Route>,
            <Route
              path="/create-update-work-experience/:id?"
              key="create-update-work-experience"
            >
              <CreateUpdateWorkExperience />
            </Route>,
            <Route path="/manage-messages" key="manage-messages">
              <ManageMessages />
            </Route>,
          ]}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
