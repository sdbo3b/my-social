import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { User } from "../../../testData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dot: {
      backgroundColor: "#33eb13",
    },
    friendImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  })
);

interface OnlineProps {
  user: User;
}

const Online: React.FC<OnlineProps> = ({ user }) => {
  const classes = useStyles();
  return (
    <ListItem button>
      <ListItemIcon>
        <Badge classes={{ dot: classes.dot }} variant="dot" overlap="circular">
          <img
            className={classes.friendImg}
            src={user.profilePicture}
            alt="friend"
          />
        </Badge>
      </ListItemIcon>
      <ListItemText primary={user.username} />
    </ListItem>
  );
};

export default Online;
