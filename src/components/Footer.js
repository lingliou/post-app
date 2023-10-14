import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

function Footer() {
    return (
        <Paper
            square
            elevation={3}
            style={{ position: "static", width: "100vw" }}
        >
            <Box p={2}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                >
                    {"Copyright © "}
                    <Link
                        color="inherit"
                        href="https://lingliou.github.io/portfolio/"
                    >
                        LINGLI OU
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Box>
        </Paper>
    );
}

export default Footer;
