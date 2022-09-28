import React from "react";
import About from "./About";
import Work from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Body() {
    return (
        <div className="app-body">
            <About />
            <Work />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;
