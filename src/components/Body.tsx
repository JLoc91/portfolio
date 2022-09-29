import React from "react";
import { Welcome, About, Projects, Skills, Contact } from "./Components";

function Body() {
    return (
        <div className="app-body">
            <Welcome />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;
