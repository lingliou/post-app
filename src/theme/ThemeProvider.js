// ThemeToggleProvider.js
import React, { useState, useEffect, useContext, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

// Create a context to provide the theme and theme toggling function
export const ThemeToggleContext = createContext();
let intervalId;

export const ThemeToggleProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        if (intervalId) clearInterval(intervalId);
        setCurrentTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    const darkModeStartHour = 19; // 7:00 PM
    const darkModeEndHour = 7; // 7:00 AM (next day)
    useEffect(() => {
        const updateTheme = () => {
            const currentHour = new Date().getHours();
            const isNightTime =
                currentHour >= darkModeStartHour ||
                currentHour < darkModeEndHour;

            // Set the theme based on the time of day
            setCurrentTheme(isNightTime ? darkTheme : lightTheme);
        };

        updateTheme();

        // Update the theme every minute (adjust the interval as needed)
        intervalId = setInterval(updateTheme, 60e3); // 60,000 milliseconds (1 minute)

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(intervalId);
        };
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};
