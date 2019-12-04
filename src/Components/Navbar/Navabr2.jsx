import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../Assets/img/libex.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="#eceff1" position="static">
        <Toolbar style={{marginLeft: 100 }} variant="dense" >
        <a href="/">
        <img  style={{ width: 100, height: 30 }} src={logo} alt="logo" />
        </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}