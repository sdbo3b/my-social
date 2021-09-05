import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import Share from "../share/Share";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 5.5,
      display: "flex",
      padding: theme.spacing(2),
    },
  })
);

const Feed: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Share></Share>
    </Box>
  );
};

export default Feed;
