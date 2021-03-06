import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Home from "./pages/home/Home";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { useAppSelector } from "./state";

const App: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Register />}
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/register">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route exact path="/profile/:username">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
