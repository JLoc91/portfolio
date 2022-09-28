import React from "react";
// import { Link } from "react-router-dom";
import "./css/Header.css";
import Profile from "./Profile"


function Header() {
    return (
        <header className="app-header">
            <Profile />
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

        </header>
    );
}

export default Header;
