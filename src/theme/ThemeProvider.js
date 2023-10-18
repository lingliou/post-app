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

    const darkModeStartHour = 19; // 7:00 PM
    const darkModeEndHour = 7; // 7:00 AM (next day)
    useEffect(() => {
        const currentHour = new Date().getHours();
        const isNightTime =
            currentHour >= darkModeStartHour || currentHour < darkModeEndHour;

        // Set the theme based on the time of day
        setCurrentTheme(isNightTime ? darkTheme : lightTheme);
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export default ThemeToggleProvider;
