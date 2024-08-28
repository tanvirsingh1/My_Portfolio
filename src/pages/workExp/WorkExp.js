import React from "react";
import { SiReact } from "react-icons/si";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
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
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2021 - present"
                            iconStyle={{ background: "#04D9FF", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Credit Analyst
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                CBV Collection Services, Markham, ON
                            </h4>
                            <p>
                                <ul>
                                    <li>Conducted fraud analysis and managed risk.</li>
                                    <li>Handled calls with high-quality customer service and accurate documentation.</li>
                                    <li>Ensured compliance with policies and used Jira for task management.</li>
                                </ul>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="(May - Aug)2024"
                            iconStyle={{ background: "#04D9FF", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Software Test Analyst
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                CGI. Toronto, ON
                            </h4>
                            <p>
                                <p>
                                    <ul>
                                        <li>Worked on a project converting MT format messages to MX format [ISO 20022] for the SWIFT mandate.</li>
                                        <li>Learned and utilized automated testing tools, including Selenium, to build and implement test scripts based on requirements.</li>
                                        <li>Collaborated with solution architects, developers, business analysts, and subject matter experts to establish the technical vision and understand the end-user perspective.</li>
                                        <li>Worked with the Performance and Application Tuning team, using LoadRunner to optimize application performance.</li>
                                        <li>Gained experience with ADF pipelines and tested ETL processes.</li>
                                    </ul>
                                </p>

                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp;