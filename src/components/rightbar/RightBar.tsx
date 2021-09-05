import { createStyles, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 3.5,
      display: "flex",
    },
  })
);

const RightBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div>RightBar</div>
    </Box>
  );
};

export default RightBar;
