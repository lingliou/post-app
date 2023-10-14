import * as React from "react";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Header />
            <Home />
            <Footer />
        </Container>
    );
}
