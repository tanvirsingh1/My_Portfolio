import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";
import './Menu.css'
const Menu = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <motion.div
                        className="navbar-profile-pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={require('../../assets/Images/profile-pic.JPG')}
                            width="150" height="150"
                            alt="profile pic"
                        />
                    </motion.div>
                    <motion.div
                        className="nav-items"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome />
                                    Home
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout />
                                    About
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReadingEbook />
                                    Education
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBiotech />
                                    Tech Stack
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcVideoProjector />
                                    Projects
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcPortraitMode />
                                    Work Experience
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBusinessContact />
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome title="Home" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout title="About" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReadingEbook title="Education" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBiotech title="Tech Stack" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcVideoProjector title="Projects" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcPortraitMode title="Experience" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBusinessContact title="Contact" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menu;
