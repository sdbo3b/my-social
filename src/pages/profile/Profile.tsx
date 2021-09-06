import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
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
                src="/assets/post/3.jpeg"
                alt="cover"
              />
              <img
                className={classes.profileUserImg}
                src="/assets/post/7.jpeg"
                alt="user"
              />
            </Box>
            <Box className={classes.profileInfo}>
              <Typography className={classes.profileInfoName} component="h4">
                Jane Doe
              </Typography>
              <span className={classes.profileInfoDesc}>Hello World!</span>
            </Box>
          </Box>
          <Box className={classes.mainBottom}>
            <Feed />
            <RightBar page="profile" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
