import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/Techstacklist";
const Techstack = () => {
    return (
        <>
            <div className="container techstack" id="techstack">

                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Skills
                </h2>
                <hr />
                {TechstackList.map((group) => (
                    <div key={group.category} className="techstack-group">
                        <h4 className="techstack-category">{group.category}</h4>
                        <div className="row">
                            {group.items.map((tech) => (
                                <div key={tech.name} className="col-md-3 col-sm-6">
                                    <div className="card m-2">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center align-items-center">
                                                <div className="align-self-center">
                                                    <tech.icon className="tech-icon" />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="mb-0">{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Techstack;
