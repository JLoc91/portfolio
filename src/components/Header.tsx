import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";


function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <h1>Julien</h1>
                <Link to="/about">About Me</Link>
                <Link to="/work">Work</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cv">CV</Link>
            </header>
        </div>
    );
}

export default Header;
