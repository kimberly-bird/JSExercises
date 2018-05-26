import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kimmy from './Kimmy';
import Project from './Project';
import registerServiceWorker from './registerServiceWorker';
import NavBar from "./nav/NavBar";

// render is like appendChild - append <App /> onto ReactDOM
ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Kimmy} />
            <Route exact path="/Kimmy" component={Kimmy} />
            <Route exact path="/Project" component={Project} />
        </div>
    </Router>
), document.querySelector("#root"))
