import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost } from "../../api";
import Post from "../post/Post";
import Share from "../share/Share";

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

interface IFeedProps {
  username: string;
}

const Feed: React.FC<IFeedProps> = ({ username }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/612e16b0f39fb454d0a4efd0");
      const data: IPost[] = res.data;
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Box className={classes.root}>
      <Share />
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
