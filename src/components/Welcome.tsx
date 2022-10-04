import { motion } from "framer-motion";

export function Welcome() {

    return (
        <div id="intro" className="sectionBox">
            <motion.h1
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
                            delay: 0.2,
                            type: "spring",
                            duration: 0.6,
                        },
                    },
                }}
                className="welcomeText"
            >
                Welcome!
            </motion.h1>
            <br></br>
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
                My name is <span className="thick__text">Julien</span>, and I am a Junior Full Stack
                Developer from Berlin, who is focused on building &
                developing clean front and backend code
              
            </motion.h2>

            <motion.h3
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
                            delay: 0.6,
                            type: "spring",
                            duration: 0.6,
                        },
                    },
                }}
                className="intro__contact intro__text"
            >
            </motion.h3>

        </div>
    );
}
