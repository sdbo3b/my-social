import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
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
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <NavBar />
      <div className={classes.offset}></div>
      <Box className={classes.body}>
        <SideBar />
        <Feed />
        <RightBar page="home" />
      </Box>
    </Box>
  );
};

export default Home;
