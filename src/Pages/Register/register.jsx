import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import { register } from "../../Public/Redux/actions/user";
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

//functional components
const SignUp = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = data;
    await dispatch(register(name, email, password))
      .then(result => {
        if (
          result.value.data.status === 401 ||
          result.value.data.status === 403
        ) {
          Swal.fire({
            position: "center",
            type: "error",
            title: result.value.data.response.error,
            showConfirmButton: true
          });
          setInterval(() => {
            window.location.reload();
          }, 800);
        } else {
          Swal.fire({
            position: "center",
            type: "success",
            icon: "success",
            title: "Register success. \n Please login to access",
            showConfirmButton: true
          });
          setInterval(() => {
            window.location.href = "/login";
          }, 800);
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
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                value={data.name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "15px" }} variant="h6">
                * Character minimal 3
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={data.email}
                autoComplete="email"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "15px" }} variant="h6">
                * Example : example@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={data.password}
                label="Password"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "15px" }} variant="h6">
                * Character minimal 8
              </Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Already have an account ? &nbsp;
              <Link href="/login" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </>
  );
};

export default SignUp;
