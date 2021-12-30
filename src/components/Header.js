import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../my_profile_pic.png";
import { makeStyles } from "@material-ui/core";
import Typed from "react-typed";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(15),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Fares TAKORABT" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Fares TAKORABT"]} typeSpeed={40} />
      </Typography>
      <br />
      <Avatar src={avatar} alt="Fares TAKORABT" />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web design", "Web development", "Mern Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
