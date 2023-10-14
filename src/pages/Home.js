import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PostCard from "../components/PostCard";
import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

export default function Home() {
    const [rawPosts, setRawPosts] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10; // Adjust as needed

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setRawPosts(data);
                setTotalPages(Math.ceil(data.length / pageSize));
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, rawPosts.length);
        setCurrentPosts(rawPosts.slice(startIndex, endIndex));
    }, [currentPage, rawPosts]);

    return (
        <Container className="main" sx={{ flex: 1, overflowY: "auto" }}>
            {/* <Typography variant="h2" sx={{ fontSize: "2rem", m: "10px 0" }}>
                View Posts
            </Typography> */}
            <Grid container sx={{ m: 2 }}>
                {currentPosts.map((post) => (
                    <Grid item xs={12} sm={6} key={post.id}>
                        <PostCard
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box
                style={{
                    position: "sticky",
                    bottom: 0,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px 0",
                }}
            >
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    page={currentPage}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
            </Box>
        </Container>
    );
}
