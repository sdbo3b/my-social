import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Home from "./pages/home/Home";
import theme from "./theme";
import Profile from "./pages/profile/Profile";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <Profile />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
