import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/colosseum.jpg";
import "./index.css";
import axios from "axios";

const gaipurl = `https://sheet.best/api/sheets/d1fefe02-6fd5-45d0-8874-aad65a085a38`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
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
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  const [date, setDate] = React.useState("");
  const [email, setEmail] = React.useState("");
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
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img src={logo} className="Side-logo" alt="logo" />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            Gladiator's Vigor
          </Typography>
          <Typography component="h1" variant="h5">
            Confidence, Physique, Purpose.
          </Typography>
          <Typography component="h6" variant="h6">
            This is some test text about the product and why you should sign up
            for the waitlist! Get notified when this product is avaiable.
          </Typography>
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
              Add Me to the Wait List!
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
