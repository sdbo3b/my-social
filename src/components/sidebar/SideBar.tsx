import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  HelpOutline,
  RssFeed,
  WorkOutline,
  Event,
  School,
  Bookmark,
  Group,
  PlayCircleFilledOutlined,
  Chat,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import React from "react";
import { Users } from "../../testData";
import Friend from "./friend/friend";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 3,
      display: "flex",
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      overflowY: "scroll",
      scrollbarWidth: "thin",
      position: "sticky",
      top: "65px",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    list: {
      flexGrow: 1,
    },
  })
);

const SideBar: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <List component="nav" className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <RssFeed />
            </ListItemIcon>
            <ListItemText primary="Feed" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlayCircleFilledOutlined />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HelpOutline />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkOutline />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemText primary="Show More" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Users.map((friend) => (
                <Friend key={friend.id} friend={friend} />
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
