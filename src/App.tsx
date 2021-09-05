import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Home from "./pages/home/Home";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <Home />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
