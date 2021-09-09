import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../api";
import { useAppSelector } from "../../state";
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
  user?: IUser;
}

const RightBar: React.FC<RightBarProps> = ({ page, user }) => {
  const classes = useStyles();
  const { user: currentUser } = useAppSelector((state) => state.auth);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user) {
          const friendList = await axios.get(
            "/api/v1/users/friends/" + user?._id
          );
          setFriends(friendList.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getFriends();
  }, [user]);

  const getContent = () => {
    switch (page) {
      case "home":
        return <Home user={user} />;
      case "profile":
        return (
          <Profile user={user} currentUser={currentUser} friends={friends} />
        );
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
