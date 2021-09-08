import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=john`);
      const data: IUser = res.data;
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <Box>
      <NavBar />
      <div className={classes.offset}></div>
      <Box className={classes.body}>
        <SideBar />
        <Feed username="john" />
        <RightBar page="home" user={user} />
      </Box>
    </Box>
  );
};

export default Home;
