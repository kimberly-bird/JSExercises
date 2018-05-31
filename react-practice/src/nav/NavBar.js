import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation" id="myId">
                <Link to="/Kimmy">Home</Link>
                <Link to="/Project">Projects</Link>
                <Link className="nav-link" to="/ContactForm">Contact Kimmy</Link>
            </nav>
        );
    }
}

export default NavBar;