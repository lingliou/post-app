import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "./Layout";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCommentsForPost } from "../api/comment";
import { Paper } from "@mui/material";

export default function PostDetail() {
    const { postId } = useParams();
    const location = useLocation();
    const { title, body } = location.state;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentsForPost(postId)
            .then((data) => {
                setComments(data);
                if (data) {
                }
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return title ? (
        <Layout>
            <Paper></Paper>
            {body}
            <Button variant="outlined" component={Link} to="/">
                Back to Home
            </Button>
        </Layout>
    ) : (
        <div>Loading...</div>
    );
}
