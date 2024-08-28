import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "gray" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2016 - 2020"
                        iconStyle={{ background: "#04D9FF", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">High School diploma</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Springdales Public School, India
                        </h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "gray" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2021 - 2025"
                        iconStyle={{ background: "#04D9FF", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title"> Honors Bachelors in Technology - Software Development</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Toronto, ON
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Education;