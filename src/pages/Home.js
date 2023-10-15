import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PostCard from "../components/PostCard";
import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import Layout from "./Layout";

export default function Home() {
    const [rawPosts, setRawPosts] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const pageSize = 10; // Adjust as needed

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setRawPosts(data);
                if (data) {
                    setTotalPages(Math.ceil(data.length / pageSize));
                    setIsLoading(false);
                }
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    useEffect(() => {
        if (rawPosts) {
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = Math.min(startIndex + pageSize, rawPosts.length);
            setCurrentPosts(rawPosts.slice(startIndex, endIndex));
        }
    }, [currentPage, rawPosts]);

    return (
        <Layout>
            {/* <Container className="main" sx={{ flex: 1, overflowY: "auto" }}> */}
            {/* <Typography variant="h2" sx={{ fontSize: "2rem", m: "10px 0" }}>
                View Posts
            </Typography> */}
            <Grid container sx={{ m: 2 }}>
                {isLoading
                    ? new Array(pageSize).fill("").map((e, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                              <Skeleton
                                  variant="rounded"
                                  //   width="50%vw"
                                  height={110}
                                  style={{ margin: "10px" }}
                              />
                          </Grid>
                      ))
                    : currentPosts.map((post) => (
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
            {/* </Container> */}
        </Layout>
    );
}
