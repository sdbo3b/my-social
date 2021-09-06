import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useMemo } from "react";
import { TPost, Users } from "../../testData";

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
  post: TPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const classes = useStyles();
  const user = useMemo(
    () => Users.filter((u) => u.id == post.userId)[0],
    [post]
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.top}>
          <Box className={classes.topLeft}>
            <img
              className={classes.profileImg}
              src={user.profilePicture}
              alt=""
            />
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>{post.date}</span>
          </Box>
          <Box className={classes.topRight}>
            <MoreVert />
          </Box>
        </Box>
        <Box className={classes.center}>
          <span>{post.desc}</span>
          <img className={classes.postImg} src={post.photo} alt="post" />
        </Box>
        <Box className={classes.bottom}>
          <Box className={classes.bottomLeft}>
            <img className={classes.icon} src="/assets/like.png" alt="like" />
            <img className={classes.icon} src="/assets/heart.png" alt="heart" />
            <span className={classes.likeCounter}>{post.like} people like</span>
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
