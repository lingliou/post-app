import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function CommentCard({ name, body, email }) {
    // return (
    //     <Card
    //         sx={{
    //             display: "flex",
    //             flexDirection: "row",
    //             height: "100%",
    //             alignItems: "center",
    //             // margin: 1,
    //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    //             transition: "0.3s",
    //             "&:hover": {
    //                 boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    //             },
    //         }}
    //     >
    //         <CardContentNoPadding sx={{ pb: 1 }}>
    //             <Typography
    //                 variant="body2"
    //                 sx={{
    //                     color: "inherit",
    //                     fontWeight: "400",
    //                     fontSize: "16px",
    //                     my: 1,
    //                 }}
    //             >
    //                 {body}
    //             </Typography>
    //             <Box
    //                 sx={{
    //                     display: "flex",
    //                     flexDirection: "row",
    //                     alignItems: "center",
    //                     justifyContent: "flex-start",
    //                     mt: 1,
    //                 }}
    //             >
    //                 <Avatar
    //                     src="/broken-image.jpg"
    //                     sx={{ width: 24, height: 24, my: 1 }}
    //                 />
    //                 {/* <Typography>{name}</Typography> */}
    //                 <Typography sx={{ mx: 1 }}>{email}</Typography>
    //             </Box>
    //         </CardContentNoPadding>
    //     </Card>
    // );

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
                    justifyContent: "flex-start",
                    mt: 1,
                }}
            >
                <Avatar
                    src="/broken-image.jpg"
                    sx={{ width: 24, height: 24, my: 1 }}
                />
                {/* <Typography>{name}</Typography> */}
                <Typography sx={{ mx: 1 }}>{email}</Typography>
            </Box>
        </Box>
    );
}
