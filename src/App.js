import React from "react";
import {Route, Switch} from "react-router-dom";

import Layout from './components/Layout/Layout';

import AllProjects from "./components/Sections/AllProjects";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import WorkExperiences from "./components/Sections/WorkExperiences";

function App(){
    return(
        <Layout>
            {/* <Switch>
                <Route path="/" exact>
                    <AllProjectsPage/>
                </Route>
                <Route path="/about-me">
                    <AboutMePage/>
                </Route>
            </Switch> */}
            <About/>
            <AllProjects/>
            <Skills/>
            <WorkExperiences/>

        </Layout>
    );
}

export default App;