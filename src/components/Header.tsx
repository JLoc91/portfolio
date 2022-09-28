import React from "react";
// import { Link } from "react-router-dom";
import "./css/Header.css";


function Header() {
    return (
            <header className="app-header">
                <h1>Julien</h1>
                <a href="#about">About Me</a>
                <a href="#work">Work</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <a href="#cv">CV</a>
            </header>
    );
}

export default Header;
