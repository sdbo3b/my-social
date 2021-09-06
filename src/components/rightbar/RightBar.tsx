import {
  Badge,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 3.5,
      display: "flex",
    },
    body: {
      padding: theme.spacing(2),
    },
    birthdayContainer: {
      display: "flex",
      alignItems: "center",
    },
    birthdayImg: {
      width: "40px",
      height: "40px",
      marginRight: "10px",
    },
    birthdayText: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.fontSize,
    },
    ad: {
      width: "100%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      borderRadius: "10px",
    },
    friendImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    dot: {
      backgroundColor: "#33eb13",
    },
    title: {},
  })
);

const RightBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.birthdayContainer}>
          <img
            className={classes.birthdayImg}
            src="/assets/gift.png"
            alt="gift"
          />
          <span className={classes.birthdayText}>
            <b>Tom Doe</b> and <b>4 other friends</b> have a birthday today.
          </span>
        </Box>
        <img className={classes.ad} src="/assets/ad.png" alt="" />
        <h4 className={classes.title}>Online Friends</h4>
        <List component="div">
          <ListItem button>
            <ListItemIcon>
              <Badge
                classes={{ dot: classes.dot }}
                variant="dot"
                overlap="circular"
              >
                <img
                  className={classes.friendImg}
                  src="/assets/person/3.jpeg"
                  alt="friend"
                />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="David Doe" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
