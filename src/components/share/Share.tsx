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

import React, { FormEvent, useRef, useState } from "react";
import { useAppSelector } from "../../state";
import axios from "axios";
import { Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
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
    shareImgContainer: {
      paddingTop: "0px",
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(2.5),
      paddingLeft: theme.spacing(2.5),
      position: "relative",
    },
    shareImg: {
      width: "100%",
      objectFit: "cover",
    },
    shareImgCancel: {
      position: "absolute",
      top: "0",
      right: "20px",
      opacity: "70%",
      color: theme.palette.error.main,
      cursor: "pointer",
    },
  })
);

const Share: React.FC = () => {
  const classes = useStyles();
  const { user } = useAppSelector((state) => state.auth);
  const desc = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newPost = {
      userId: user?._id,
      desc: desc.current?.value,
      img: "",
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post("/api/v1/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      await axios.post("/api/v1/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.top}>
          <img
            className={classes.profileImg}
            src={
              user?.profilePicture ||
              `${process.env.REACT_APP_PUBLIC_URL}person/noAvatar.png`
            }
            alt=""
          />
          <InputBase
            className={classes.textField}
            placeholder="What's on your mind?"
            aria-label="share-field"
            inputRef={desc}
          />
        </Box>
        <Box component="hr" className={classes.ruler}></Box>
        {file && (
          <Box className={classes.shareImgContainer}>
            <img
              className={classes.shareImg}
              src={URL.createObjectURL(file)}
              alt=""
            />
            <Cancel
              className={classes.shareImgCancel}
              onClick={() => setFile(null)}
            />
          </Box>
        )}
        <Box component="form" className="bottom" onSubmit={handleSubmit}>
          <Box className={classes.options}>
            <label htmlFor="file" className={classes.option}>
              <PermMedia htmlColor="#de351b" className={classes.icon} />
              <span className={classes.optionText}>Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files![0])}
              ></input>
            </label>
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
              <Button variant="contained" color="primary" type="submit">
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
