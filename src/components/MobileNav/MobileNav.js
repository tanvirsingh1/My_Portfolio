import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import { navItems } from "../../utils/navItems";
import "./MobileNav.css";
const MobileNav = () => {
    const [open, setOpen] = useState(false);

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    // handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenuFold
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    )}


                </div>
                {open && (
                    <div className="mobile-nav-menu">
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
                                            onClick={handleMenuClick}
                                        >
                                            <Icon />
                                            {label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileNav;
