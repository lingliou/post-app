import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCommentsForPost } from "../api/comment";
import {
    Container,
    Grid,
    Typography,
    Button,
    Divider,
    Chip,
    Paper,
} from "@mui/material";
import Layout from "./Layout";
import PostContent from "../components/PostContent";
import CommentCard from "../components/CommentCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export default function PostDetail() {
    const { postId } = useParams();
    const location = useLocation();
    const { title, body } = location.state;

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCommentsForPost(postId)
            .then((data) => {
                setComments(data);
                if (data) {
                    setIsLoading(false);
                    setComments(data);
                }
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <Layout>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    my: 4,
                }}
            >
                <Button
                    size="small"
                    startIcon={<ArrowBackIcon />}
                    style={{ textTransform: "none" }}
                    component={Link}
                    to={`/`}
                >
                    Back to Home
                </Button>

                {title ? (
                    <React.Fragment>
                        <PostContent title={title} body={body} />
                        <hr></hr>
                        <Typography
                            sx={{ fontSize: "28px", fontWeight: "400", mt: 5 }}
                        >
                            comments
                        </Typography>
                        {!isLoading && (
                            <Paper square={false} elevation={3}>
                                {comments.map((comment, idx) => (
                                    <React.Fragment key={comment.id}>
                                        {idx !== 0 && (
                                            <Divider>
                                                <Chip label="What Others Said" />
                                            </Divider>
                                        )}
                                        <CommentCard
                                            name={comment.name}
                                            body={comment.body}
                                            email={comment.email}
                                        />
                                    </React.Fragment>
                                ))}
                            </Paper>
                        )}
                    </React.Fragment>
                ) : (
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "80vh",
                        }}
                    >
                        <div>Loading...</div>
                    </Container>
                )}
            </Container>
        </Layout>
    );
}
