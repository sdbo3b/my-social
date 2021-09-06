import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../testData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 5.5,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
    },
  })
);

const Feed: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Share />
      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
