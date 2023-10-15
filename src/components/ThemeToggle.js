// ThemeToggleButton.js
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeToggleContext } from "../theme/ThemeProvider";
import { Box } from "@mui/material";

const ThemeToggleButton = () => {
    const { toggleTheme, currentTheme } = useContext(ThemeToggleContext);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "right",
                borderRadius: 1,
                p: 2,
            }}
        >
            {currentTheme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
                {currentTheme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
        </Box>
    );
};

export default ThemeToggleButton;
