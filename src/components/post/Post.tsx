import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MoreVert from "@material-ui/icons/MoreVert";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost, IUser } from "../../api";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../state";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.feedShadow[0],
    },
    body: {
      padding: theme.spacing(1),
    },
    top: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    topLeft: {
      display: "flex",
      alignItems: "center",
    },
    topRight: {},
    profileImg: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    postUsername: {
      fontSize: "15px",
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    postDate: {
      fontSize: theme.typography.fontSize,
    },
    postImg: {
      marginTop: theme.spacing(2.5),
      width: "100%",
      maxHeight: "500px",
      objectFit: "cover",
    },
    center: {
      marginTop: theme.spacing(2.5),
      marginBottom: theme.spacing(2.5),
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    bottomLeft: {
      display: "flex",
      alignItems: "center",
    },
    bottomRight: {},
    icon: {
      width: "24px",
      height: "24px",
      marginRight: theme.spacing(0.6),
      cursor: "pointer",
    },
    likeCounter: {
      fontSize: theme.typography.fontSize,
    },
    commentText: {
      fontSize: theme.typography.fontSize,
      cursor: "pointer",
      borderBottom: "1px dashed gray",
    },
  })
);

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const classes = useStyles();

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { user: currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    currentUser && setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser?._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/v1/users?userId=${post.userId}`);
      const data: IUser = res.data;
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    try {
      axios.put(`/api/v1/posts/${post._id}/like`, { userId: currentUser?._id });
    } catch (err) {
      console.error(err);
    }

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked((prev) => !prev);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.top}>
          <Box className={classes.topLeft}>
            <Link to={`/profile/${user?.username}`}>
              <img
                className={classes.profileImg}
                src={
                  user?.profilePicture ||
                  `${process.env.REACT_APP_PUBLIC_URL}person/noAvatar.png`
                }
                alt="friend"
              />
            </Link>

            <span className={classes.postUsername}>{user?.username}</span>
            <span className={classes.postDate}>{format(post.createdAt)}</span>
          </Box>
          <Box className={classes.topRight}>
            <MoreVert />
          </Box>
        </Box>
        <Box className={classes.center}>
          <span>{post.desc}</span>
          <img
            className={classes.postImg}
            src={`${process.env.REACT_APP_PUBLIC_URL}${post.img}`}
            alt=""
          />
        </Box>
        <Box className={classes.bottom}>
          <Box className={classes.bottomLeft}>
            <img
              className={classes.icon}
              src={`${process.env.REACT_APP_PUBLIC_URL}like.png`}
              onClick={handleLike}
              alt="like"
            />
            <img
              className={classes.icon}
              src={`${process.env.REACT_APP_PUBLIC_URL}heart.png`}
              alt="heart"
              onClick={handleLike}
            />
            <span className={classes.likeCounter}>{like} people like</span>
          </Box>
          <Box className={classes.bottomRight}>
            <span className={classes.commentText}>{post.comment} comments</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
