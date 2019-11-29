import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import { register } from "../../Public/Redux/actions/user";

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          SIGN UP
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
  );
};

export default SignUp;
