import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navItems } from "../../utils/navItems";
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
                            {navItems.map(({ to, label, icon: Icon }) => (
                                <div className="nav-link" key={to}>
                                    <Link
                                        to={to}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <Icon />
                                        {label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            {navItems.map(({ to, label, icon: Icon }) => (
                                <div className="nav-link" key={to}>
                                    <Link
                                        to={to}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <Icon title={label} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menu;
