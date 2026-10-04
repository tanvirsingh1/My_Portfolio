import React, { useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
} from "framer-motion";
import "./WorkExp.css";

const jobs = [
    {
        title: "Data Analyst, Analytics & AI Automation",
        company: "Hotspex Media",
        location: "Toronto, ON",
        date: "Nov 2025 - Present",
        current: true,
        tools: ["Google Tag Manager", "GA4", "Meta CAPI", "Adverity", "dbt", "Looker", "n8n", "Claude"],
        points: [
            "Automated GTM tag builds from client pixel sheets with AI (Claude Skills, Claude Code and Cowork), cutting manual setup time.",
            "Built ETL pipelines with Adverity and dbt that feed the reporting team.",
            "Set up conversion tracking for multiple clients in GA4, Google Ads and Meta through Google Tag Manager.",
            "Built server-side GTM and Meta Conversions API (CAPI) setups for server-to-server conversion data.",
            "Supported the reporting team with metrics dashboards in Looker and Looker Studio.",
            "Investigated and fixed data collection issues to keep reported metrics accurate.",
            "Built n8n workflows that sync leads from website forms into HubSpot and Salesforce.",
        ],
    },
    {
        title: "Data Analyst, Business Performance & Reporting",
        company: "CBV Collection Services",
        location: "Markham, ON",
        date: "Jun 2022 - Nov 2025",
        tools: ["Power BI", "SQL Server", "Python", "SAS", "SAP", "Power Automate"],
        points: [
            "Built Power BI dashboards that track credit performance, risk metrics and KPI trends for business stakeholders.",
            "Analyzed credit account data with SQL, Python and SAS to find discrepancies and support compliance.",
            "Automated SAS reporting workflows for account monitoring and risk assessment, reducing manual effort.",
            "Optimized SQL Server databases and queries for faster reporting.",
            "Built Python tools that pull data from multiple sources through APIs, reducing manual input errors.",
            "Gathered reporting requirements with cross-functional teams and wrote guides for non-technical users.",
            "Extracted and reconciled SAP data for financial and operational reporting.",
            "Automated recurring workflows with Power Automate.",
            "Built task tracking and production monitoring dashboards to improve workflow planning and on-time delivery.",
        ],
    },
    {
        title: "QA Automation Engineer, Data Validation (Co-op)",
        company: "CGI Inc",
        location: "Toronto Financial Unit, Toronto, ON",
        date: "May 2024 - Aug 2024, Jan 2025 - May 2025",
        tools: ["Java", "Selenium", "Robot Framework", "LoadRunner", "Azure Data Factory", "Jira"],
        points: [
            "Automated SWIFT MT-MX message validation with Java scripts, reducing manual processing by 40%.",
            "Built Selenium and Robot Framework test suites that cut regression testing time by 30%.",
            "Ran LoadRunner performance tests to confirm system reliability at 1M+ transactions per day.",
            "Validated Power BI dashboards against source data and fixed inconsistencies before stakeholder reporting.",
            "Tested ETL pipelines in Azure Data Factory to confirm data transformed and loaded correctly.",
            "Worked with developers and business analysts in an Agile team, managing test cases and defects in Jira.",
        ],
    },
];

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

const JobCard = ({ job, reduceMotion }) => {
    const [expanded, setExpanded] = useState(false);
    const extra = job.points.slice(VISIBLE_POINTS);

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
                            {job.company}
                            {job.current && <span className="exp-current">Current</span>}
                        </h3>
                        <p className="exp-role">{job.title}</p>
                    </div>
                    <div className="exp-meta">
                        <span className="exp-date">{job.date}</span>
                        <span className="exp-location">{job.location}</span>
                    </div>
                </header>

                <ul className="exp-points">
                    {job.points.slice(0, VISIBLE_POINTS).map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>

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
                        {expanded ? "Show less" : `Show all ${job.points.length}`}
                    </button>
                )}

                <motion.ul
                    className="exp-tools"
                    variants={chipList}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    aria-label="Tools used"
                >
                    {job.tools.map((tool) => (
                        <motion.li key={tool} variants={chip}>
                            {tool}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.article>
        </motion.li>
    );
};

const WorkExp = () => {
    const timelineRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 60%"],
    });
    const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    return (
        <section className="work" id="work">
            <div className="work-exp">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Work Experience
                </h2>
                <hr />
                <div className="exp-timeline" ref={timelineRef}>
                    <span className="exp-line" aria-hidden="true" />
                    <motion.span
                        className="exp-line exp-line-progress"
                        aria-hidden="true"
                        style={{ scaleY: reduceMotion ? 1 : lineScale }}
                    />
                    <ol className="exp-list">
                        {jobs.map((job) => (
                            <JobCard key={job.company} job={job} reduceMotion={reduceMotion} />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
