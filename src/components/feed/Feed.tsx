import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost } from "../../api";
import { useAppSelector } from "../../state";
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
  username?: string;
}

const Feed: React.FC<IFeedProps> = ({ username }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState<IPost[]>([]);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/api/v1/posts/profile/" + username)
        : await axios.get("/api/v1/posts/timeline/" + user?._id);
      const data: IPost[] = res.data;
      setPosts(
        data.sort((p1, p2) => {
          return (
            new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()
          );
        })
      );
    };
    fetchPosts();
  }, [username, user?._id]);

  return (
    <Box className={classes.root}>
      {(!username || username === user?.username) && <Share />}
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
