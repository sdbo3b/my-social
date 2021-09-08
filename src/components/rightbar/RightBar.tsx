import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { IUser } from "../../api";
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
  user: IUser | undefined;
}

const RightBar: React.FC<RightBarProps> = ({ page, user }) => {
  const classes = useStyles();

  const getContent = () => {
    switch (page) {
      case "home":
        return <Home user={user} />;
      case "profile":
        return <Profile user={user} />;
      default:
        return <Home user={user} />;
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>{getContent()}</Box>
    </Box>
  );
};

export default RightBar;
