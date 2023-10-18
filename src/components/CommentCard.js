import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Checkbox } from "@mui/material";
import {
    deepOrange,
    deepPurple,
    pink,
    green,
    amber,
    blue,
    grey,
    red,
} from "@mui/material/colors";
import { useState, useEffect } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { likeComment, unlikeComment } from "../commentLikes/likesSlice";

const colorArray = [
    deepOrange[500],
    deepPurple[500],
    pink[500],
    green[500],
    amber[500],
    blue[500],
    grey[500],
    red["A400"],
];

export default function CommentCard({ name, body, email, postId, commentId }) {
    const [randomColor, setRandomColor] = useState(
        colorArray[Math.floor(Math.random() * colorArray.length)]
    );

    const dispatch = useDispatch();
    const isLiked = useSelector(
        (state) => state.likes[`${postId}_${commentId}`]
    );

    const handleLike = () => {
        if (isLiked) {
            dispatch(unlikeComment({ postId, commentId }));
        } else {
            dispatch(likeComment({ postId, commentId }));
        }
    };

    useEffect(() => {
        // Update the random color only when the component initially mounts
        setRandomColor(
            colorArray[Math.floor(Math.random() * colorArray.length)]
        );
    }, []);

    return (
        <Box sx={{ mx: 3, mt: 2 }}>
            <Typography
                variant="body2"
                sx={{
                    color: "inherit",
                    fontWeight: "400",
                    fontSize: "16px",
                    my: 1,
                }}
            >
                {body}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        mt: 1,
                    }}
                >
                    <Avatar
                        src="/broken-image.jpg"
                        sx={{
                            width: 24,
                            height: 24,
                            my: 1,
                            bgcolor: randomColor,
                        }}
                    >
                        {email.charAt(0).toUpperCase()}
                    </Avatar>

                    {/* <Typography>{name}</Typography> */}
                    <Typography sx={{ mx: 1 }}>{email}</Typography>
                </Box>

                <div>
                    <Checkbox
                        style={{ color: "red" }}
                        inputProps={{ "aria-label": "controlled" }}
                        checked={isLiked}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        onChange={handleLike}
                    />
                    {/* <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                    /> */}
                </div>
            </Box>
        </Box>
    );
}
