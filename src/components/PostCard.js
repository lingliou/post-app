import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function PostCard({ title, body, id }) {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100%",
                alignItems: "center",
                margin: 1,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "0.3s",
                "&:hover": {
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                },
            }}
        >
            <CardContentNoPadding sx={{ pb: 1 }}>
                <Typography
                    gutterBottom
                    variant="h2"
                    component={Link}
                    to={`/posts/${id}`}
                    state={{ title, body }} // Pass the post data as state
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "700",
                        fontSize: "18px",
                        ":hover": { textDecoration: "underline" },
                    }}
                >
                    {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body.length > 100 ? `${body.slice(0, 100)}...` : title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 1,
                    }}
                >
                    <Avatar
                        src="/broken-image.jpg"
                        sx={{ width: 24, height: 24, my: 1 }}
                    />
                    <Button
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        style={{ textTransform: "none" }}
                        component={Link}
                        to={`/posts/${id}`}
                        state={{ title, body }} // Pass the post data as state
                    >
                        Read More
                    </Button>
                </Box>
            </CardContentNoPadding>
        </Card>
    );
}
