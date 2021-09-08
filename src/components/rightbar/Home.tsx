import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { createStyles, Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import { IUser } from "../../api";
import Online from "./online/online";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    title: {},
  })
);

interface IHomeProps {
  user: IUser | undefined;
}

const Home: React.FC<IHomeProps> = ({ user }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.birthdayContainer}>
        <img
          className={classes.birthdayImg}
          src={`${process.env.REACT_APP_PUBLIC_URL}assets/gift.png`}
          alt="gift"
        />
        <span className={classes.birthdayText}>
          <b>Tom Doe</b> and <b>4 other friends</b> have a birthday today.
        </span>
      </Box>
      <img
        className={classes.ad}
        src={`${process.env.REACT_APP_PUBLIC_URL}assets/ad.png`}
        alt="ad"
      />
      <h4 className={classes.title}>Online Friends</h4>
      <List component="div">
        {/* {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))} */}
      </List>
    </React.Fragment>
  );
};

export default Home;
