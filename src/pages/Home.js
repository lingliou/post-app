import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PostCard from "../components/Card";

export default function Home() {
    return (
        <Box sx={{ my: 4 }}>
            <PostCard />
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
    );
}
