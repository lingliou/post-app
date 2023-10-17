import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PostCard from "../components/PostCard";
// import { fetchPosts } from "../api/posts";
import { useGetPostsQuery } from "../api/apiSlice";
import { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import Layout from "./Layout";

export default function Home() {
    // const [posts, setposts] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    // const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    // const [isLoading, setIsLoading] = useState(true);

    const pageSize = 8; // Adjust as needed

    // useEffect(() => {
    //     fetchPosts()
    //         .then((data) => {
    //             setposts(data);
    //             if (data) {
    //                 setTotalPages(Math.ceil(data.length / pageSize));
    //                 setIsLoading(false);
    //             }
    //         })
    //         .catch((error) => console.error("Error fetching posts:", error));
    // }, []);
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    useEffect(() => {
        if (posts) {
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = Math.min(startIndex + pageSize, posts.length);
            setCurrentPosts(posts.slice(startIndex, endIndex));
        }
    }, [currentPage, posts]);

    let content;
    if (isLoading) {
        content = new Array(pageSize).fill("").map((e, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
                <Skeleton
                    variant="rounded"
                    //   width="50%vw"
                    height={110}
                    style={{ margin: "10px" }}
                />
            </Grid>
        ));
    } else if (isSuccess) {
        content = currentPosts.map((post, idx) => (
            <Grid item xs={12} sm={6} key={post.id}>
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    id={post.id}
                />
            </Grid>
        ));
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <Layout>
            {/* <Container className="main" sx={{ flex: 1, overflowY: "auto" }}> */}
            {/* <Typography variant="h2" sx={{ fontSize: "2rem", m: "10px 0" }}>
                View Posts
            </Typography> */}

            <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
                {content}
            </Grid>
            <Box
                style={{
                    // position: "sticky",
                    // bottom: 0,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px 0",
                }}
            >
                <Pagination
                    count={Math.ceil(posts?.length / pageSize) || 1}
                    variant="outlined"
                    shape="rounded"
                    page={currentPage}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
            </Box>

            {/* </Container> */}
        </Layout>
    );
}
