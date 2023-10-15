import React from "react";

import { Container, Button, Typography, Box, Avatar } from "@mui/material";

export default function PostContent({ title, body }) {
    return (
        <React.Fragment>
            <Typography
                variant="h1"
                sx={{ fontSize: "36px", fontWeight: "600" }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <Avatar
                    src="/broken-image.jpg"
                    sx={{ width: 30, height: 30, my: 2 }}
                />
                <Typography sx={{ m: 1 }}>User1</Typography>
            </Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                {body}
            </Typography>
        </React.Fragment>
    );
}
