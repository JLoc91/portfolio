import React, { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";


export function Contact() {
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
        <motion.div id="contact" className="sectionBox">
            <motion.div
                animate={animation}
                ref={ref}
                // className="contactWrapper"
            >
                <h2 className="contactHeader">Feel free to contact me!</h2>
                <div className="contactWrapper shadow">
                    <a href="mailto:jfaist.dev@googlemail.com">
                        <h3>Send Email</h3>
                    </a>
                    <div>
                        <a
                            href="https://linkedin.com/in/julien-faist"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="contactLogo"
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
                                className="contactLogo"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub Logo"
                            />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
