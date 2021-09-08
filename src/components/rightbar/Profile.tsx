import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { IUser } from "../../api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: theme.typography.fontSize + 2,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1),
    },
    info: {
      marginBottom: theme.spacing(4),
    },
    infoItem: {
      marginBottom: theme.spacing(1),
    },
    infoKey: {
      fontWeight: theme.typography.fontWeightMedium,
      marginRight: theme.spacing(2),
      color: theme.palette.grey["600"],
    },
    infoValue: {
      fontWeight: theme.typography.fontWeightLight,
    },
    followings: {
      display: "flex",
      flexWrap: "wrap",
    },
    following: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(2.5),
      marginRight: theme.spacing(3),
      cursor: "pointer",
    },
    followingImg: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius,
    },
    followingName: {},
  })
);

interface IProfileProps {
  user: IUser | undefined;
}

const Profile: React.FC<IProfileProps> = ({ user }) => {
  const classes = useStyles();
  console.log(user);
  return (
    <React.Fragment>
      <Typography component="h4" className={classes.title}>
        User Information
      </Typography>
      <Box className={classes.info}>
        <Box className={classes.infoItem}>
          <Typography component="span" className={classes.infoKey}>
            City:
          </Typography>
          <Typography component="span" className={classes.infoValue}>
            {user?.city}
          </Typography>
        </Box>
        <Box className={classes.infoItem}>
          <Typography component="span" className={classes.infoKey}>
            From:
          </Typography>
          <Typography component="span" className={classes.infoValue}>
            {user?.from}
          </Typography>
        </Box>
        <Box className={classes.infoItem}>
          <Typography component="span" className={classes.infoKey}>
            Relationship:
          </Typography>
          <Typography component="span" className={classes.infoValue}>
            {user?.status}
          </Typography>
        </Box>
      </Box>
      <Typography component="h4" className={classes.title}>
        User Friends
      </Typography>
      <Box className={classes.followings}>
        <Box className={classes.following}>
          <img
            src="/assets/person/3.jpeg"
            alt="friend"
            className={classes.followingImg}
          />
          <Typography component="span" className={classes.followingName}>
            Alex Durden
          </Typography>
        </Box>
        <Box className={classes.following}>
          <img
            src="/assets/person/2.jpeg"
            alt="friend"
            className={classes.followingImg}
          />
          <Typography component="span" className={classes.followingName}>
            Janell Shrum
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Profile;
