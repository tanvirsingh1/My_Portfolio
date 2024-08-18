import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import "./Home.css";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Home = () => {
    const [theme, setTheme] = useTheme()
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
    return (
        <>

            <div className="container-fluid home-container" id="home">
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === "light" ? (
                        <BsFillMoonStarsFill size={30} />
                    ) : (
                        <BsFillSunFill size={30} />
                    )}
                </div>
                <div className="container home-content">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Hi 👋 I'm a</h2>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ["Software Engineer!"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="home-buttons">
                            <a
                                className="btn btn-hire"
                                href="https://api.whatsapp.com/send?phone=1234567890"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Hire Me
                            </a>
                            <a className="btn btn-cv" href={Resume} download="Tanvir.pdf">
                                My Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    );
};

export default Home;
