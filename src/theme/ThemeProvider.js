// ThemeToggleProvider.js
import React, { useState, useEffect, useContext, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

// Create a context to provide the theme and theme toggling function
export const ThemeToggleContext = createContext();

const ThemeToggleProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setCurrentTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    useEffect(() => {
        // You can save the current theme preference in local storage or a cookie for persistence.
    }, [currentTheme]);

    return (
        <ThemeToggleContext.Provider value={{ currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export default ThemeToggleProvider;
