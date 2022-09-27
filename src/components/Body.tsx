import React from "react";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import CV from "./CV";

function Body() {
    return (
        <div className="app-body">
            <About />
            <Work />
            <Skills />
            <Contact />
            <CV />
        </div>
    );
}

export default Body;
