import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export function Skills() {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 0.5,
                },
            });
        }
        if (!inView) {
            animation.start({
                opacity: 0,
            });
        }
    }, [inView]);

    return (
        <motion.div id="skills" ref={ref}>
        
            <motion.div animate={animation} ref={ref} className="skillWrapper">
                <h3 className="skillTitle">Skills</h3>
                <div className="skillBox">
                    <div className="topSkill">
                        <ul>
                            <h3>Languages</h3>
                            <li>
                                <p>JavaScript (ES6)</p>{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    alt="JavaScript Logo"
                                />
                            </li>
                            <li>
                                TypeScript{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                    alt="TypeScript Logo"
                                />
                            </li>
                            <li>
                                CSS{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                    alt="CSS3 Logo"
                                />
                            </li>
                            <li>
                                HTML{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                    alt="HTML5 Logo"
                                />
                            </li>
                        </ul>

                        <ul>
                            <h3>Frameworks</h3>
                            <li>
                                Express{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                    alt="Express Logo"
                                />
                            </li>
                            <li>
                                React{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    alt="React.js Logo"
                                />
                            </li>
                            <li>
                                Vue{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                    alt="Vue.js Logo"
                                />
                            </li>
                        </ul>

                        <ul>
                            <h3>Libraries</h3>
                            <li>
                                jQuery{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                                    alt="jQuery Logo"
                                />
                            </li>

                            <li>
                                Redux{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                                    alt="Redux Logo"
                                />
                            </li>
                            <li>
                                Socket.io{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                                    alt="Socket.io Logo"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="bottomSkill">
                        <ul>
                            <h3>Tools</h3>
                            <li>
                                Git & Github{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="GitHub Logo"
                                />
                            </li>
                            <li>
                                Chrome DevTools
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
                                    alt="Google Chrome Logo"
                                />
                            </li>
                        </ul>

                        <ul>
                            <h3>Extra</h3>
                            <li>
                                AWS{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                                    alt="AWS Logo"
                                />
                            </li>
                            <li>
                                PostgreSQL{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                    alt="PostgreSQL Logo"
                                />
                            </li>
                            <li>
                                Express-Handlebars{" "}
                                <img
                                    className="stackLogo"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg"
                                    alt="Express-Handlebars Logo"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
