
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import Resume from './resume';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage } />
        <Route  path="/Resume" component={Resume } />
        <Route  path="/About" component={AboutMe } />
        <Route  path="/Contact" component={Contact } />
        <Route  path="/projects" component={Projects } />
    </Switch>
)

export default Main;