import React from "react";
import { MdWork } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const jobs = [
    {
        title: "Data Analyst, Analytics & AI Automation",
        company: "Hotspex Media, Toronto, ON",
        date: "Nov 2025 – Present",
        points: [
            "Automated GTM tag builds from client pixel sheets with AI (Claude Skills, Claude Code and Cowork), cutting manual setup time.",
            "Built ETL pipelines with Adverity and dbt that feed the reporting team.",
            "Supported the reporting team with metrics dashboards in Looker and Looker Studio.",
            "Set up conversion tracking for multiple clients in GA4, Google Ads and Meta through Google Tag Manager.",
            "Built server-side GTM and Meta Conversions API (CAPI) setups for server-to-server conversion data.",
            "Investigated and fixed data collection issues to keep reported metrics accurate.",
            "Built n8n workflows that sync leads from website forms into HubSpot and Salesforce.",
        ],
    },
    {
        title: "Data Analyst, Business Performance & Reporting",
        company: "CBV Collection Services LTD, Markham, ON",
        date: "Jun 2022 – Nov 2025",
        points: [
            "Built Power BI dashboards that track credit performance, risk metrics and KPI trends for business stakeholders.",
            "Analyzed credit account data with SQL, Python and SAS to find discrepancies and support compliance.",
            "Automated SAS reporting workflows for account monitoring and risk assessment, reducing manual effort.",
            "Gathered reporting requirements with cross-functional teams and wrote guides for non-technical users.",
            "Optimized SQL Server databases and queries for faster reporting.",
            "Built Python tools that pull data from multiple sources through APIs, reducing manual input errors.",
            "Extracted and reconciled SAP data for financial and operational reporting.",
            "Automated recurring workflows with Power Automate.",
            "Built task tracking and production monitoring dashboards to improve workflow planning and on-time delivery.",
        ],
    },
    {
        title: "QA Automation Engineer, Data Validation (Co-op)",
        company: "CGI Inc, Toronto Financial Unit, Toronto, ON",
        date: "May 2024 – Aug 2024 | Jan 2025 – May 2025",
        points: [
            "Validated Power BI dashboards against source data and fixed inconsistencies before stakeholder reporting.",
            "Tested ETL pipelines in Azure Data Factory to confirm data transformed and loaded correctly.",
            "Ran LoadRunner performance tests to confirm system reliability at 1M+ transactions per day.",
            "Automated SWIFT MT-MX message validation with Java scripts, reducing manual processing by 40%.",
            "Built Selenium and Robot Framework test suites that cut regression testing time by 30%.",
            "Worked with developers and business analysts in an Agile team, managing test cases and defects in Jira.",
        ],
    },
];

const WorkExp = () => {
    return (
        <>
            <div className="work" id="work">
                <div className="container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor="#1e1e2c">
                        {jobs.map((job) => (
                            <VerticalTimelineElement
                                key={job.company}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: "white", color: "#1e1e2c" }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  white",
                                }}
                                date={job.date}
                                iconStyle={{ background: "#04D9FF", color: "#fff" }}
                                icon={<MdWork />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {job.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    {job.company}
                                </h4>
                                <ul>
                                    {job.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp;
