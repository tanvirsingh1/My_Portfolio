import React from "react";
import { FaTrophy, FaUsers } from "react-icons/fa";
import "./Awards.css";

const awards = [
    {
        title: "Employee of the Month",
        org: "CBV Collection Services",
        detail: "Accurate data analysis and timely reporting.",
    },
    {
        title: "Co-op Student of the Term",
        org: "CGI Inc",
        detail: "QA automation and ETL testing work.",
    },
    {
        title: "Dean's Honour Roll",
        org: "Seneca Polytechnic",
        detail: "High academic performance in software development courses.",
    },
    {
        title: "Top Contributor",
        org: "Seneca Software Development Club",
        detail: "Helped peers with coding projects and workshops.",
    },
];

const leadership = [
    {
        title: "Workshop Organizer",
        org: "Seneca Software Development Club",
        detail: "Led Python and cloud computing workshops.",
    },
    {
        title: "Peer Mentor",
        org: "Seneca Polytechnic",
        detail: "Coached junior students on Python, Git and software development best practices.",
    },
    {
        title: "Hack the North 2024",
        org: "Hackathon",
        detail: "Built a financial analytics dashboard with Python, Node.js and Power BI.",
    },
    {
        title: "Seneca Innovation Challenge 2023",
        org: "Competition",
        detail: "Contributed to an AI-based scheduling assistant built with Python and Flask.",
    },
];

const ItemList = ({ heading, icon: Icon, items }) => (
    <div className="col-lg-6 mb-4">
        <h3 className="awards-subheading">
            <Icon className="awards-icon" />
            {heading}
        </h3>
        {items.map((item) => (
            <div className="card awards-card mb-3" key={item.title}>
                <div className="card-body">
                    <h5 className="awards-title">{item.title}</h5>
                    <h6 className="awards-org">{item.org}</h6>
                    <p className="mb-0">{item.detail}</p>
                </div>
            </div>
        ))}
    </div>
);

const Awards = () => {
    return (
        <div className="awards" id="awards">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                Awards & Leadership
            </h2>
            <hr />
            <div className="row mt-4">
                <ItemList heading="Awards" icon={FaTrophy} items={awards} />
                <ItemList heading="Leadership & Activities" icon={FaUsers} items={leadership} />
            </div>
        </div>
    );
};

export default Awards;
