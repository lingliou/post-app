import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
    return (
        <Container
            // style={{ overflowX: "hidden" }}
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Header />
            <Container
                className="main"
                sx={{
                    flex: 1,
                    overflowY: "auto",
                }}
            >
                {children}
            </Container>
            <Footer />
        </Container>
    );
}
