import React from "react";
import Timeline from "../../components/Timeline/Timeline";

const jobs = [
    {
        heading: "Hotspex Media",
        badge: "Current",
        subtitle: "Data Analyst, Analytics & AI Automation",
        location: "Toronto, ON",
        date: "Nov 2025 - Present",
        tags: ["Google Tag Manager", "GA4", "Meta CAPI", "Adverity", "dbt", "Looker", "n8n", "Claude"],
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
        heading: "CBV Collection Services",
        subtitle: "Data Analyst, Business Performance & Reporting",
        location: "Markham, ON",
        date: "Jun 2022 - Nov 2025",
        tags: ["Power BI", "SQL Server", "Python", "SAS", "SAP", "Power Automate"],
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
        heading: "CGI Inc",
        subtitle: "QA Automation Engineer, Data Validation (Co-op)",
        location: "Toronto Financial Unit, Toronto, ON",
        date: "May 2024 - Aug 2024, Jan 2025 - May 2025",
        tags: ["Java", "Selenium", "Robot Framework", "LoadRunner", "Azure Data Factory", "Jira"],
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

const WorkExp = () => {
    return (
        <section className="timeline-section" id="work">
            <div className="timeline-inner">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Work Experience
                </h2>
                <hr />
                <Timeline items={jobs} section="work_experience" />
            </div>
        </section>
    );
};

export default WorkExp;
