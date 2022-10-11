import React from "react";
// import { Link } from "react-router-dom";
import "./css/Header.css";
import { Profile } from "./Components";



function Header() {
    return (
        <header className="app-header">
            <Profile />
            <a href="#about">
                <h3>About Me</h3>
            </a>
            <a href="#projects">
                <h3>Projects</h3>
            </a>
            <a href="#skills">
                <h3>Skills</h3>
            </a>
            <a href="#contact">
                <h3>Contact</h3>
            </a>
        </header>
    );
}

export default Header;
