import React, { useState } from "react";
import clsx from "clsx";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./HomeStyle";
import Navbar from "../../Components/Navbar/Navbar";
import SideNav from "../../Components/SideNav/SideNav";
import ImgMediaCard from "../../Components/Card/Card";
import Cardflow from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer"

//function component
const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //hande Open and Close
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar className={classes.root}>
      <CssBaseline />

      {/* componen Navbar */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AppsIcon style={{color:"#487eb0"}} />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>

      {/* component Sidebar/Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon style={{ color: "white", width: "17px", height: "17px" }} />
          </IconButton>
        </div>
        <SideNav />
      </Drawer>

      {/* main */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Cardflow />
        <h2 className={classes.h2}>list book</h2>
        <ImgMediaCard />
      </main>
    </Toolbar>
  );
};

export default Home;
