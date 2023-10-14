import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ThemeToggleButton from "./ThemeToggle";
import { Paper } from "@mui/material";

function Header() {
    return (
        <Paper
            square
            elevation={3}
            style={{ position: "static", width: "100vw" }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr",
                    gridGap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1" sx={{ fontSize: "2rem", p: 3 }}>
                    Post app
                </Typography>
                <ThemeToggleButton />
            </Box>
        </Paper>
    );
}

export default Header;
