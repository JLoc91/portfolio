import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function Projects() {
    const { ref, inView } = useInView({ threshold: 0.2 });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    delay: 0.1,
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
        <div id="projects" className="sectionBox">
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        translateY: "-20px",
                        opacity: 0,
                    },
                    visible: {
                        translateY: "0px",
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            type: "spring",
                            duration: 0.6,
                        },
                    },
                }}
                className="welcomeText"
            >
                Here you can find some of the projects I developed
            </motion.h2>
            <motion.div
                animate={animation}
                ref={ref}
                className="projectsContainer"
            >
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox"
                >
                    <a
                        href="https://github.com/JLoc91/travel-football-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            animate={animation}
                            ref={ref}
                            className="projectImage"
                        >
                            <img
                                className="projectGif"
                                src="./projects/travel-football-app.gif"
                                alt="travel-football-app GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Travel-Football-App</h4>
                        <p className="projectDescription">
                            This app allows you to look for upcoming football
                            matches and see the weather forecast and hotels near
                            the venue.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            JavaScript, React.js, Node.js, 3rd-Party APIs
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox"
                >
                    <a
                        href="https://github.com/JLoc91/travel-football-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            animate={animation}
                            ref={ref}
                            className="projectImage"
                        >
                            <img
                                className="projectGif"
                                src="./projects/travel-football-app.gif"
                                alt="travel-football-app GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Travel-Football-App</h4>
                        <p className="projectDescription">
                            This app allows you to look for upcoming football
                            matches and see the weather forecast and hotels near
                            the venue.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            JavaScript, React.js, Node.js, 3rd-Party APIs
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox"
                >
                    <a
                        href="https://github.com/JLoc91/travel-football-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            animate={animation}
                            ref={ref}
                            className="projectImage"
                        >
                            <img
                                className="projectGif"
                                src="./projects/travel-football-app.gif"
                                alt="travel-football-app GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Travel-Football-App</h4>
                        <p className="projectDescription">
                            This app allows you to look for upcoming football
                            matches and see the weather forecast and hotels near
                            the venue.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            JavaScript, React.js, Node.js, 3rd-Party APIs
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox"
                >
                    <a
                        href="https://github.com/JLoc91/travel-football-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            animate={animation}
                            ref={ref}
                            className="projectImage"
                        >
                            <img
                                className="projectGif"
                                src="./projects/travel-football-app.gif"
                                alt="travel-football-app GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Travel-Football-App</h4>
                        <p className="projectDescription">
                            This app allows you to look for upcoming football
                            matches and see the weather forecast and hotels near
                            the venue.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            JavaScript, React.js, Node.js, 3rd-Party APIs
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
