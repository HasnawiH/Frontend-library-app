import React, { Fragment } from "react";
import {
  MenuItem,
  Typography,
  Toolbar,
  InputBase,
  Avatar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useStyles from "./NavbarStyle";
import logo from "../../Assets/img/logo.png";

//function component
const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <MenuItem className={classes.menuItem}>
        All Categories <ArrowDropDownIcon />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        All Times <ArrowDropDownIcon />{" "}
      </MenuItem>
      <Typography className={classes.title} variant="h6" noWrap></Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search Book.."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Toolbar>
        <Avatar style={{ width: 32, height: 32 }} src={logo}></Avatar>
        <h3 style={{ color: "black" }}>Library Book</h3>
      </Toolbar>
    </Fragment>
  );
};

export default Navbar;
