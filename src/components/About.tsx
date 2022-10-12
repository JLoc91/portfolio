import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function About() {
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
        <div id="about" className="sectionBox">
            <motion.div animate={animation} ref={ref} className="aboutWrapper">
                <h2 className="about__title">Background</h2>

                <h3>
                    I am{" "}
                    <span className="thick__text">
                        Junior Full Stack Developer
                    </span>
                    {" "}with an engineering and sales background. After working
                    in the additive manufacturing (3D-printing) industry, I
                    decided to deepen my programming skills from my studies in a
                    12-week full-stack web development bootcamp at SPICED
                    Academy. There I developed a passion for JavaScript, Node.js
                    and React in particular, but am always interested in
                    learning new technologies.
                </h3>
            </motion.div>
        </div>
    );
}

