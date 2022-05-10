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
import ManageList from "./components/Admin/ManageList";
import AuthContext from "./store/auth-context";
import { Switch } from "react-router-dom";
import ManageProjects from "./components/Admin/ManageProjects/ManageProjects";
import ManageWorkExpereinceList from "./components/Admin/ManageWorkExperiences/ManageWorkExperienceList";
import CreateUpdateProject from "./components/Admin/ManageProjects/CreateUpdateProject/CreateUpdateProject";
import CreateSkill from "./components/Admin/ManageSkills/CreateSkill/CreateSkill";
import ManageSkills from "./components/Admin/ManageSkills/ManageSkills";
import ManageMessages from "./components/Admin/ManageMessages/ManageMessages";

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
            <ManageSkills/>
          </Route>,
          <Route path="/create-skill" key={Math.random()}>
            <CreateSkill/>
          </Route>,
          <Route path="/manage-work-experiences" key={Math.random()}>
            <ManageWorkExpereinceList />
          </Route>,
          <Route path="/manage-messages" key={Math.random()}>
            <ManageMessages />
          </Route>,
        ]}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
