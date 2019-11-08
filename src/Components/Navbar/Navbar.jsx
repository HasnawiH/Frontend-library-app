import React from "react";
import { MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./NavbarStyle";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../../Assets/img/logo.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};

export default Navbar;
