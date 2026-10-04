import React from "react";
import Timeline from "../../components/Timeline/Timeline";

const schools = [
    {
        heading: "Seneca Polytechnic",
        badge: "4.0 GPA",
        subtitle: "Honors Bachelor of Technology, Software Development",
        location: "Toronto, ON",
        date: "2021 - 2025",
        points: [
            "Graduated with a 4.0/4.0 GPA.",
            "Named to the President's List for academic excellence, 6 consecutive terms.",
            "Made the Dean's Honour Roll for high performance in software development courses.",
        ],
    },
    {
        heading: "Springdales Public School",
        subtitle: "High School Diploma",
        location: "India",
        date: "2016 - 2020",
        points: [],
    },
];

const Education = () => {
    return (
        <section className="timeline-section" id="education">
            <div className="timeline-inner">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education
                </h2>
                <hr />
                <Timeline items={schools} />
            </div>
        </section>
    );
};

export default Education;
