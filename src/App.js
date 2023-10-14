import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import ThemeToggleButton from "./components/ThemeToggle";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://lingliou.github.io/portfolio/">
                LINGLI OU
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function App() {
    return (
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ display: "flex" }}>
                <Typography variant="h1">View Posts</Typography>
                <ThemeToggleButton />
            </Box>
            <Home />
            <Copyright />
        </Container>
    );
}
