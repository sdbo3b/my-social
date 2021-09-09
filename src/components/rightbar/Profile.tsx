import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import React, { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../api";
import { followUser, unfollowUser, useAppDispatch } from "../../state";
import { beginFollowUser, beginUnfollowUser } from "../../state/thunks";

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
    followingName: {
      textAlign: "center",
    },
    followButton: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
  })
);

interface IProfileProps {
  user?: IUser;
  currentUser?: IUser;
  friends?: { _id: string; username: string; profilePicture: string }[];
}

const Profile: React.FC<IProfileProps> = ({ user, currentUser, friends }) => {
  const classes = useStyles();
  const follow =
    currentUser && user && currentUser!.following.includes(user!._id);
  const [followed, setFollowed] = useState<boolean>(follow!);
  const dispatch = useAppDispatch();

  const handleFollow = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!followed && currentUser && user) {
        dispatch(beginFollowUser(currentUser._id, user._id));
      } else {
        if (currentUser && user) {
          dispatch(beginUnfollowUser(currentUser._id, user._id));
        }
      }
    } catch (err) {
      console.error(err);
    }
    setFollowed((followed) => !followed);
  };

  return (
    <React.Fragment>
      {user?.username !== currentUser?.username && currentUser && (
        <Button
          className={classes.followButton}
          variant="contained"
          color="primary"
          onClick={handleFollow}
        >
          {followed ? (
            <>
              Unfollow <Remove />
            </>
          ) : (
            <>
              Follow <Add />
            </>
          )}
        </Button>
      )}
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
        {friends?.map((friend) => (
          <Link
            key={friend._id}
            to={`/profile/${friend.username}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box className={classes.following}>
              <img
                src={
                  friend.profilePicture ||
                  `${process.env.REACT_APP_PUBLIC_URL}person/noAvatar.png`
                }
                alt=""
                className={classes.followingImg}
              />
              <Typography component="span" className={classes.followingName}>
                {friend.username}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Profile;
