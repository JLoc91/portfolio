import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "animate.css";

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
                className="projectHeader"
            >
                Here you can find some of the projects I created
            </motion.h2>
            <motion.div
                animate={animation}
                ref={ref}
                className="projectsContainer"
            >
                <motion.div
                    animate={animation}
                    ref={ref}
                    // className="projectBox animate__animated animate__bounce animate__delay-2s"
                    className="projectBox shadow"
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
                        <a href="https://travel-football-app.onrender.com/">
                            Check the deployed version here!
                        </a>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            JavaScript | React.js | Node.js | 3rd-Party APIs
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox shadow"
                >
                    <a
                        href="https://github.com/JLoc91/social-network"
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
                                src="./projects/social-network.gif"
                                alt="social-network GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Social-Network</h4>
                        <p className="projectDescription">
                            A single page application social-network made with
                            React with the functionalities of registrating,
                            reseting the password, login, creating a profile,
                            chatting (socket.io), adding and removing friends.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            React | Redux | Express | Socket.io | Node |
                            PostgreSQL
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox shadow"
                >
                    <a
                        href="https://github.com/JLoc91/imageboard"
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
                                src="./projects/imageboard.gif"
                                alt="imageboard GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Imageboard</h4>
                        <p className="projectDescription">
                            A single page application made with Vue.js which
                            allows users to upload a picture to an AWS bucket
                            and insert it into the page. Users can comment on
                            the specific pictures and can delete them. So far no
                            registration or login functionality is implemented.
                        </p>
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            Vue.js | Express | Node | PostgreSQL
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={animation}
                    ref={ref}
                    className="projectBox shadow"
                >
                    <a
                        href="https://github.com/JLoc91/petition"
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
                                src="./projects/petition.gif"
                                alt="petition GIF"
                            />
                        </motion.div>
                    </a>
                    <motion.div
                        animate={animation}
                        ref={ref}
                        className="projectText"
                    >
                        <h4>Petition</h4>
                        <p className="projectDescription">
                            A Web-Application which allows the user to register
                            and login, to sign a petition and see which other
                            people have signed the petition so far. Furthermore
                            the user is able to delete his/her signature and
                            delete his/her account.
                        </p>
                        {/* <a href="https://moped-freedom.herokuapp.com/">
                            Check the deployed version here!
                        </a> */}
                        <p className="projectStack">
                            <span>
                                <strong>Stack:</strong>
                            </span>{" "}
                            Express | Express-Handlebars | Node | PostgreSQL
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
