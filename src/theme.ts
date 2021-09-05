import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    feedShadow: [string];
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    feedShadow?: [string];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1877f2",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
  feedShadow: ["0px 0px 16px -8px rgba(0, 0, 0, 0.68)"],
});

export default theme;
