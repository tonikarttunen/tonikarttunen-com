// Routes

import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
// import App from 'components/App';
import Main from './components/Main';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

export default (
  <Route name="home" handler={Main} path="/">
    <Route name="projects" handler={Projects} path="projects"/>
    <Route name="about" handler={About} path="About"/>
    <DefaultRoute handler={Home}/>
  </Route>
);
