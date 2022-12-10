import { createTheme } from "@mui/material";

const darkGrey = "#262626";
const mediumGrey = "#3a3a3a";
const lightGrey = "#d1d1d1d1";
const white = "#ffffff";
const limeGreen = "#3df730";

const theme = createTheme({
  palette: {
    primary: {
      main: darkGrey,
    },
    secondary: {
      main: mediumGrey,
    },
    lightgrey: {
      main: lightGrey,
    },
    limegreen: {
      main: limeGreen,
    },
  },
  typography: {
    h5: {
      color: "white",
      fontSize: 24,
    },
    h6: {
      color: "white",
      fontSize: 18,
    },
  },
});

export default theme;
