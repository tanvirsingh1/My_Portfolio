import React, { useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
} from "framer-motion";
import "./Timeline.css";

const VISIBLE_POINTS = 3;
const spring = { type: "spring", stiffness: 100, damping: 20 };

const chipList = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const chip = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: spring },
};

// item: { heading, badge?, subtitle, date, location, points, tags?, tagsLabel? }
const TimelineCard = ({ item, reduceMotion }) => {
    const [expanded, setExpanded] = useState(false);
    const extra = item.points.slice(VISIBLE_POINTS);

    return (
        <motion.li
            className="exp-item"
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
        >
            <span className="exp-dot" aria-hidden="true">
                <motion.span
                    className="exp-dot-fill"
                    initial={reduceMotion ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ ...spring, delay: 0.15 }}
                />
            </span>

            <motion.article
                className="exp-card"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={spring}
            >
                <header className="exp-header">
                    <div>
                        <h3 className="exp-company">
                            {item.heading}
                            {item.badge && <span className="exp-current">{item.badge}</span>}
                        </h3>
                        <p className="exp-role">{item.subtitle}</p>
                    </div>
                    <div className="exp-meta">
                        <span className="exp-date">{item.date}</span>
                        <span className="exp-location">{item.location}</span>
                    </div>
                </header>

                {item.points.length > 0 && (
                    <ul className="exp-points">
                        {item.points.slice(0, VISIBLE_POINTS).map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                )}

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.ul
                            key="more"
                            className="exp-points exp-points-more"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {extra.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {extra.length > 0 && (
                    <button
                        type="button"
                        className="exp-toggle"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                    >
                        {expanded ? "Show less" : `Show all ${item.points.length}`}
                    </button>
                )}

                {item.tags && item.tags.length > 0 && (
                    <motion.ul
                        className="exp-tools"
                        variants={chipList}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        aria-label={item.tagsLabel || "Tools used"}
                    >
                        {item.tags.map((tag) => (
                            <motion.li key={tag} variants={chip}>
                                {tag}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </motion.article>
        </motion.li>
    );
};

const Timeline = ({ items }) => {
    const timelineRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 60%"],
    });
    const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    return (
        <div className="exp-timeline" ref={timelineRef}>
            <span className="exp-line" aria-hidden="true" />
            <motion.span
                className="exp-line exp-line-progress"
                aria-hidden="true"
                style={{ scaleY: reduceMotion ? 1 : lineScale }}
            />
            <ol className="exp-list">
                {items.map((item) => (
                    <TimelineCard key={item.heading} item={item} reduceMotion={reduceMotion} />
                ))}
            </ol>
        </div>
    );
};

export default Timeline;
