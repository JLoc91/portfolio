import React from "react";

export function Profile() {
    return (
        <div id="profile">
            <h1>Julien</h1>
            <a
                href="https://linkedin.com/in/julien-faist"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="profileLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn Logo"
                />
            </a>
            <a
                href="https://github.com/JLoc91"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="profileLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub Logo"
                />
            </a>
            <a
                href="./CV_Julien_Faist.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                CV
            </a>
        </div>
    );
}
