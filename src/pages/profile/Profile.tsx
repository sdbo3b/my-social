import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IUser } from "../../api";
import Feed from "../../components/feed/Feed";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    body: {
      display: "flex",
    },
    main: {
      flex: 9,
    },
    mainTop: {},
    mainBottom: {
      display: "flex",
    },
    profileCover: {
      height: "320px",
      position: "relative",
    },
    profileCoverImg: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
    profileUserImg: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      position: "absolute",
      left: 0,
      right: 0,
      top: 150,
      margin: "auto",
      border: "3px solid white",
    },
    profileInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    profileInfoName: {
      fontSize: "24px",
    },
    profileInfoDesc: {
      fontWeight: theme.typography.fontWeightLight,
    },
  })
);

const Profile: React.FC = () => {
  const classes = useStyles();

  const [user, setUser] = useState<IUser>();
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/v1/users?username=${username}`);
      const data: IUser = res.data;

      setUser(data);
    };
    fetchUser();
  }, [username]);

  return (
    <Box>
      <NavBar />
      <div className={classes.offset}></div>
      <Box className={classes.body}>
        <SideBar />
        <Box className={classes.main}>
          <Box className={classes.mainTop}>
            <Box className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src={
                  user?.coverPicture ||
                  `${process.env.REACT_APP_PUBLIC_URL}person/noCover.png`
                }
                alt="cover"
              />
              <img
                className={classes.profileUserImg}
                src={
                  user?.profilePicture ||
                  `${process.env.REACT_APP_PUBLIC_URL}person/noAvatar.png`
                }
                alt=""
              />
            </Box>
            <Box className={classes.profileInfo}>
              <Typography className={classes.profileInfoName} component="h4">
                {user?.username}
              </Typography>
              <span className={classes.profileInfoDesc}>{user?.desc}</span>
            </Box>
          </Box>
          <Box className={classes.mainBottom}>
            <Feed username={username} />
            <RightBar page="profile" user={user} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
