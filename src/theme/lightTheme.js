// lightTheme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#2196F3",
        },
        mode: "light",
        type: "light", // Set the theme type to light
    },
});

export default lightTheme;
