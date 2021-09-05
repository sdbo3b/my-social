import {
  Button,
  createStyles,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PermMedia from "@material-ui/icons/PermMedia";
import Label from "@material-ui/icons/Label";
import Room from "@material-ui/icons/Room";
import EmojiEmotions from "@material-ui/icons/EmojiEmotions";

import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "170px",
      borderRadius: "10px",
      boxShadow: theme.feedShadow[0],
      display: "flex",
    },
    body: {
      padding: "10px",
      flexGrow: 1,
    },
    top: {
      display: "flex",
      alignItems: "center",
    },
    profileImg: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px",
    },
    textField: {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
    ruler: {
      margin: theme.spacing(2),
    },
    bottom: {
      display: "flex",
      alignItems: "center",
    },
    options: {
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(2.5),
    },
    option: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(2),
      cursor: "pointer",
    },
    optionText: {
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    },
    icon: {
      fontSize: "24px",
      marginRight: theme.spacing(0.5),
    },
    shareButton: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginRight: theme.spacing(2),
    },
  })
);

const Share: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.top}>
          <img
            className={classes.profileImg}
            src="/assets/person/1.jpeg"
            alt="person"
          />
          <InputBase
            className={classes.textField}
            placeholder="What's on your mind?"
            aria-label="share-field"
          />
        </Box>
        <Box component="hr" className={classes.ruler}></Box>
        <Box className="bottom">
          <Box className={classes.options}>
            <Box className={classes.option}>
              <PermMedia htmlColor="#de351b" className={classes.icon} />
              <span className={classes.optionText}>Photo or Video</span>
            </Box>
            <Box className={classes.option}>
              <Label htmlColor="#1877f2" className={classes.icon} />
              <span className={classes.optionText}>Tag</span>
            </Box>
            <Box className={classes.option}>
              <Room htmlColor="#2c9e21" className={classes.icon} />
              <span className={classes.optionText}>Location</span>
            </Box>
            <Box className={classes.option}>
              <EmojiEmotions htmlColor="#e3dc12" className={classes.icon} />
              <span className={classes.optionText}>Emotions</span>
            </Box>
            <Box className={classes.shareButton}>
              <Button variant="contained" color="primary">
                Share
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Share;
