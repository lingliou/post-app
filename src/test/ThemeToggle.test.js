// ThemeToggleButton.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggleButton from "../components/ThemeToggle";
import {
    ThemeToggleProvider,
    ThemeToggleContext,
} from "../theme/ThemeProvider";

// Mock createTheme function from Material-UI
jest.mock("@mui/material/styles", () => ({
    ...jest.requireActual("@mui/material/styles"),
    createTheme: jest.fn(),
}));

describe("ThemeToggleButton", () => {
    it("renders in light mode with the correct icon", () => {
        // Mock createTheme to return a light theme
        const createThemeMock = jest.fn(() => ({
            palette: {
                mode: "light",
            },
        }));
        jest.spyOn(
            require("@mui/material/styles"),
            "createTheme"
        ).mockImplementation(createThemeMock);

        render(
            <ThemeToggleProvider>
                <ThemeToggleButton />
            </ThemeToggleProvider>
        );

        expect(screen.getByText("light mode")).toBeInTheDocument();
        expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
        expect(screen.getByTestId("brightness-icon-light")).toBeInTheDocument();
        expect(screen.queryByTestId("brightness-icon-dark")).toBeNull();
    });

    it("renders in dark mode with the correct icon", () => {
        // Mock createTheme to return a dark theme
        const createThemeMock = jest.fn(() => ({
            palette: {
                mode: "dark",
            },
        }));
        jest.spyOn(
            require("@mui/material/styles"),
            "createTheme"
        ).mockImplementation(createThemeMock);

        render(
            <ThemeToggleProvider>
                <ThemeToggleButton />
            </ThemeToggleProvider>
        );

        expect(screen.getByText("dark mode")).toBeInTheDocument();
        expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
        expect(screen.queryByTestId("brightness-icon-light")).toBeNull();
        expect(screen.getByTestId("brightness-icon-dark")).toBeInTheDocument();
    });

    it("calls toggleTheme when the button is clicked", () => {
        const toggleTheme = jest.fn();
        jest.spyOn(ThemeToggleContext, "useContext").mockReturnValue({
            toggleTheme,
        });

        render(
            <ThemeToggleProvider>
                <ThemeToggleButton />
            </ThemeToggleProvider>
        );

        const toggleButton = screen.getByTestId("theme-toggle-button");
        fireEvent.click(toggleButton);

        expect(toggleTheme).toHaveBeenCalled();
    });
});
