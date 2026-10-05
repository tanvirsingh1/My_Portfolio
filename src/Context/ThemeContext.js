import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();
const STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch (e) {
        // storage blocked: fall back to the default
    }
    return "dark";
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // storage blocked: theme just won't persist
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};

//custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
