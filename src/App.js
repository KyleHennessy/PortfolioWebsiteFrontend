import React from "react";
import {Route, Switch} from "react-router-dom";

import Layout from './components/Layout/Layout';

import AllProjectsPage from "./pages/AllProjects";
import AboutMePage from "./pages/About";

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
            <AboutMePage/>
            <AllProjectsPage/>
        </Layout>
    );
}

export default App;