import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Home from "./pages/home/Home";
import theme from "./theme";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <Login />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
