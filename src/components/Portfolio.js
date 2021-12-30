import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/mern-stack.jpg";
import project4 from "../images/react-redux.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100¨%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justifyContent="center" alignItems="center">
        {/* Project1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam voluptatum atque officia enim odio nihil tenetur
                  temporibus dolorum sapiente quis!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam voluptatum atque officia enim odio nihil tenetur
                  temporibus dolorum sapiente quis!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam voluptatum atque officia enim odio nihil tenetur
                  temporibus dolorum sapiente quis!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam voluptatum atque officia enim odio nihil tenetur
                  temporibus dolorum sapiente quis!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
