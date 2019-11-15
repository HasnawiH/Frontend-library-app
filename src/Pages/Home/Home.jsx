import React, { useState } from "react";
import clsx from "clsx";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./HomeStyle";
import Navbar from "../../Components/Navbar/Navbar";
import SideNav from "../../Components/SideNav/SideNav";
import ImgMediaCard from "../../Components/Card/Card";
//import SlideView from "../../Components/Carousel/Carousel";
import Cardflow from "../../Components/Carousel/Carousel copy";

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar className={classes.root}>
      <CssBaseline />
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
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>

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
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <SideNav />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Cardflow />
        <h2 className={classes.h2}>List Book</h2>
        <ImgMediaCard />
      </main>
    </Toolbar>
  );
};

export default Home;
