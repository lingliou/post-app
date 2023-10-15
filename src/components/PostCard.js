import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    fontSize={"18px"}
                    fontWeight={"700"}
                >
                    {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body.length > 100 ? `${body.slice(0, 100)}...` : title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    component={Link}
                    to={`/posts/${id}`}
                    state={{ title, body }} // Pass the post data as state
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}
