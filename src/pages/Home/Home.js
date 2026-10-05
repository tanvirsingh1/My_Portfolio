import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import "./Home.css";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill, BsArrowRight, BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import { trackEvent } from "../../utils/analytics";

// Real figures from the resume
const stats = [
    { value: 4, decimals: 0, suffix: "+", label: "Years in data analytics" },
    { value: 4.0, decimals: 1, suffix: "", label: "GPA at Seneca Polytechnic" },
    { value: 1, decimals: 0, suffix: "M+", label: "Transactions/day load-tested" },
    { value: 40, decimals: 0, suffix: "%", label: "Manual processing cut" },
];

const CountUp = ({ value, decimals, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const format = (v) => `${v.toFixed(decimals)}${suffix}`;
        if (reduceMotion || !inView) {
            node.textContent = format(reduceMotion ? value : 0);
            return;
        }
        const controls = animate(0, value, {
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => {
                node.textContent = format(v);
            },
        });
        return () => controls.stop();
    }, [inView, reduceMotion, value, decimals, suffix]);

    return <span ref={ref}>{`${(0).toFixed(decimals)}${suffix}`}</span>;
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const Home = () => {
    const [theme, setTheme] = useTheme();
    const reduceMotion = useReducedMotion();
    const handleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        trackEvent("theme_toggle", { theme_selected: next });
    };

    return (
        <>
            <div className="container-fluid home-container" id="home">
                <button
                    type="button"
                    className="theme-btn"
                    onClick={handleTheme}
                    aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                    {theme === "light" ? <BsFillMoonStarsFill size={20} /> : <BsFillSunFill size={20} />}
                </button>

                <motion.div
                    className="container home-content"
                    variants={container}
                    initial={reduceMotion ? false : "hidden"}
                    animate="show"
                >
                    <motion.h2 variants={item}>Hi, I'm Tanvir Singh</motion.h2>
                    <motion.h1 variants={item}>
                        <Typewriter
                            options={{
                                strings: ["Data Analyst", "Analytics Engineer", "AI Automation Builder"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </motion.h1>
                    <motion.p className="home-subtext" variants={item}>
                        I turn messy marketing and business data into dashboards, pipelines and AI automations teams actually use.
                    </motion.p>

                    <motion.div className="home-buttons" variants={item}>
                        <Link
                            className="btn btn-hire"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            onClick={() => trackEvent("cta_click", { cta_text: "Hire Me", cta_location: "hero" })}
                        >
                            Hire Me <BsArrowRight aria-hidden="true" />
                        </Link>
                        <a
                            className="btn btn-cv"
                            href={Resume}
                            download="Resume.pdf"
                            onClick={() => trackEvent("resume_download", { file_name: "Resume.pdf", link_location: "hero" })}
                        >
                            My Resume <BsDownload aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.ul className="home-stats" variants={item}>
                        {stats.map((stat) => (
                            <li key={stat.label}>
                                <strong>
                                    <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                                </strong>
                                <span>{stat.label}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
