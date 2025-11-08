import React, { useContext } from "react";
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
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames='page' key={location.key} unmountOnExit>
          <Switch location={location}>
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
              <Route path="/admin" key={Math.random()}>
                <ManageList />
              </Route>,
              <Route path="/manage-projects" key={Math.random()}>
                <ManageProjects />
              </Route>,
              <Route path="/create-update-project/:id?" key={Math.random()}>
                <CreateUpdateProject />
              </Route>,
              <Route path="/manage-skills" key={Math.random()}>
                <ManageSkills />
              </Route>,
              <Route path="/create-skill" key={Math.random()}>
                <CreateSkill />
              </Route>,
              <Route path="/manage-work-experiences" key={Math.random()}>
                <ManageWorkExperiences />
              </Route>,
              <Route
                path="/create-update-work-experience/:id?"
                key={Math.random()}
              >
                <CreateUpdateWorkExperience />
              </Route>,
              <Route path="/manage-messages" key={Math.random()}>
                <ManageMessages />
              </Route>,
            ]}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
