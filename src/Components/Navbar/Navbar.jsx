import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import logo from "../../Assets/img/libex.png";
import { searchByTitle, getBooks } from "../../Public/Redux/actions/book";

//function component
const Navbar = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  //const book = useSelector(state => state.book.bookList);

  //handleChange
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
    if (search != "") {
      dispatch(searchByTitle(search));
    } else {
      dispatch(getBooks());
    }
  };

  //handleSearch;
  // const handleSearch = () => {
  //   dispatch(searchByTitle(search));
  // };

  // //handle
  // const bookSearch = book.filter(books => {
  //   return books.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

  return (
    <Fragment>
      <MenuItem className={classes.menuItem}>
        All Categories <ArrowDropDownIcon />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        All Time <ArrowDropDownIcon />
      </MenuItem>
      <Typography className={classes.title} variant="h6" noWrap></Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search Book.."
          value={search}
          onChange={handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Toolbar>
        <Avatar style={{ width: 32, height: 32 }} src={logo}></Avatar>
        <h3 style={{ color: "black" }}>LibeX App</h3>
      </Toolbar>
    </Fragment>
  );
};

export default Navbar;
