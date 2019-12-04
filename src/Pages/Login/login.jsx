import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import { login } from "../../Public/Redux/actions/user";
import Navbar from "../../Components/Navbar/Navabr2"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = () => {
  const classes = useStyles();
  // const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  
  const dispatch = useDispatch();

  const handleChange = e => {
    e.persist();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = input;
    await dispatch(login(email, password))
      .then(result => {
        if (result.value.data.status !== 401) {
          localStorage.setItem("token", result.value.data.data.token);
          Swal.fire({
            position: "center",
            type: "success",
            icon: "success",
            title: "Login success. \n Welcome to Libex app",
            showConfirmButton: false
          });
          setInterval(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          Swal.fire({
            position: "center",
            type: "error",
            title: "Wrong email or password!",
            showConfirmButton: false
          });
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
    <Navbar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={input.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={input.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Don't have an account ? &nbsp;
              <Link href="/register" variant="body2">
                Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </>
  );
};

export default SignIn;
