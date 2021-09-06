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
      light: "#1775ee",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#f0f2f5",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: "#42b72a",
    },
  },
  feedShadow: ["0px 0px 16px -8px rgba(0, 0, 0, 0.68)"],
});

export default theme;
