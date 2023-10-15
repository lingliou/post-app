import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "./Layout";
import { Container } from "@mui/material";

function NotFound() {
    return (
        <Layout>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Horizontal center
                    alignItems: "center", // Vertical center
                    minHeight: "80vh",
                }}
            >
                <Typography variant="h3" sx={{ m: 3 }}>
                    404 - Not Found
                </Typography>
                <Typography variant="body1">
                    The page you are looking for doesn't exist or might have
                    been moved.
                </Typography>
                <Button
                    sx={{ m: 3 }}
                    variant="outlined"
                    component={Link}
                    to="/"
                >
                    Go to Home
                </Button>
            </Container>
        </Layout>
    );
}

export default NotFound;
