import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, CardMedia, Typography, Button } from "@material-ui/core";
import LoginForm from "../components/LoginForm";
import Banner from "../assests/illustration.svg";
import Logo from "../assests/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    banner: {
      backgroundImage: `url(${"src/assests/illustration.svg.jpg"})`,
      [theme.breakpoints.down("sm")]: { display: "none" },
    },
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        width: "100%",
      },
    },
    logo: {
      height: "130px",
      width: "131px",
      justifySelf: "center",
      margin: theme.spacing(3),
      [theme.breakpoints.down("xl")]: { height: "85px", width: "85px" },
      [theme.breakpoints.down("lg")]: { height: "65px", width: "65px" },
    },
    title: {
      color: "#43425D",
      fontSize: "32px",
      fontWeight: "bold",
      [theme.breakpoints.down("xl")]: { fontSize: "21px" },
      [theme.breakpoints.down("lg")]: { fontSize: "16px" },
    },
    subtitle: {
      color: "#919191",
      fontSize: "20px",
      margin: theme.spacing(2),
      [theme.breakpoints.down("xl")]: { fontSize: "20px" },
      [theme.breakpoints.down("lg")]: { fontSize: "12px" },
    },
    tag: {
      backgroundColor: "#F0F7FF",
      borderRadius: "4px",
      color: "#43425D",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5),
      fontSize: "16px",
      fontWeight: 500,
      textTransform: "none",
      [theme.breakpoints.down("xl")]: { fontSize: "16px" },
      [theme.breakpoints.down("lg")]: { fontSize: "12px" },
    },
  };
});
const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item md={8} className={classes.banner}>
        <CardMedia component="img" image={Banner} title="Intugine Banner" />
      </Grid>
      <Grid item md={4} xs={12}>
        <Container maxWidth="xs" className={classes.root}>
          <CardMedia
            component="img"
            image={Logo}
            title="Intugine Logo"
            className={classes.logo}
          />
          <Typography className={classes.title}>
            Intugine Technologies
          </Typography>
          <Typography className={classes.subtitle}>
            Logistics through innovation
          </Typography>
          <Button variant="contained" disabled className={classes.tag}>
            Intutrack Platform
          </Button>
          <LoginForm />
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
