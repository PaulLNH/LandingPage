import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";
import sideImage from "../assets/images/colosseum2.jpg";
import "./index.css";
import axios from "axios";

const gaipurl = `https://sheet.best/api/sheets/d1fefe02-6fd5-45d0-8874-aad65a085a38`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://gladiatorsvigor.com/">
        Gladiator's Vigor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    width: "auto",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    width: "25vw",
    height: "auto",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function SignInSide() {
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();

  useEffect(() => {
    setDate(new Date().toUTCString());
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]);

  const onChangeHandler = (event) => {
    const { value: email } = event.target;
    setEmail((prevEmail) => email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add form validation
    console.log(`Submitting email: ${email}`);
    axios
      .post(gaipurl, { Date: date, Email: email })
      .then((response) => {
        // TODO: Clear form and let user know email has been added successfully
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={0} sm={4} md={7} className={classes.image}>
        {/* TODO: Fix scroll bar and mobile screen */}
        <img
          src={sideImage}
          className="Side-logo"
          alt="logo"
          className={classes.image}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={logo} alt="Gladiator's Vigor" className="logo" />
          {logo ? null : (
            <Typography component="h1" variant="h2">
              Gladiator's Vigor
            </Typography>
          )}
          {/* <Typography component="h1" variant="h5" fontWeight="fontWeightBold">
            Get fit. Compete in the Arena. Become a Legend.
          </Typography> */}
          <Divider />
          <Typography component="h6" variant="h6">
            The gate opens, you stumble onto the sand. Your opponent blocks out
            the sun, making your way to your feet the Lanista yells "BEGIN!".
          </Typography>
          <p>
            Gladiator's Vigor is an immersive fitness game where you are the
            character. You must complete regular training set forth by the
            Lanista (trainer of gladiators) in preperation to compete in
            gladitorial games where you will be representing your Ludis
            (Gladiator School).
          </p>
          <p>
            The gladiatorial games are cumulative milestones of your training
            where you are matched against opponents of similiar skill and
            ability to compete for individual fame and the glory of your Ludis.
          </p>
          <p class="italic">
            Gladiator's Vigor is in early alpha, add your email to the list by
            entering it below and we will beckon you when the Colosseum opens.
          </p>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeHandler}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              I want to be a gladiator!
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
