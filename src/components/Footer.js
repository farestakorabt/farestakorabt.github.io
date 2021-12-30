import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",

      "&:hover": {
        color: "green",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      ></BottomNavigationAction>

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Twitter />}
      ></BottomNavigationAction>

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
