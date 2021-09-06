import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import Home from "./Home";
import Profile from "./Profile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 3.5,
      display: "flex",
    },
    body: {
      width: "100%",
      padding: theme.spacing(2),
    },
  })
);

interface RightBarProps {
  page: "home" | "profile";
}

const RightBar: React.FC<RightBarProps> = ({ page }) => {
  const classes = useStyles();

  const getContent = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>{getContent()}</Box>
    </Box>
  );
};

export default RightBar;
