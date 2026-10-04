import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcRatings,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";

// Order matches the section order in App.js
export const navItems = [
    { to: "home", label: "Home", icon: FcHome },
    { to: "about", label: "About", icon: FcAbout },
    { to: "work", label: "Work Experience", icon: FcPortraitMode },
    { to: "projects", label: "Projects", icon: FcVideoProjector },
    { to: "techstack", label: "Skills", icon: FcBiotech },
    { to: "education", label: "Education", icon: FcReadingEbook },
    { to: "awards", label: "Awards & Leadership", icon: FcRatings },
    { to: "contact", label: "Contact", icon: FcBusinessContact },
];
