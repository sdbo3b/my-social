import { createStyles, Theme } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { User } from "../../../testData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
    profileImage: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  })
);

interface FriendProps {
  friend: User;
}

const Friend: React.FC<FriendProps> = ({ friend }) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <img
          className={classes.profileImage}
          src={friend.profilePicture}
          alt=""
        ></img>
      </ListItemIcon>
      <ListItemText primary={friend.username} />
    </ListItem>
  );
};

export default Friend;
