import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MenuItem,
  Typography,
  Toolbar,
  InputBase,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useStyles from "./NavbarStyle";
import logo from "../../Assets/img/libex.png";
import { searchBook, getBooks } from "../../Public/Redux/actions/book";

//function component
const Navbar = () => {
  const book = useSelector(state => state.book.bookList);
  const classes = useStyles();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const resultmap = book.map(element => {
    return element.title;
  });

  //handleonChange
  const handleChange = e => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    const results = resultmap.filter(books =>
      books.toLowerCase().includes(search)
    );
    setSearchResults(results);
    if (search !== "") {
      dispatch(searchBook(searchResult));
    }
  }, [search]);

  return (
    <Fragment>
      
      <MenuItem className={classes.menuItem} >
        All Categories <ArrowDropDownIcon />
      </MenuItem>
 
      <MenuItem className={classes.menuItem}>
        All Time <ArrowDropDownIcon />
      </MenuItem>
      
      <Typography className={classes.title} variant="h6" noWrap></Typography>

      {/* component search */}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search book.."
          value={search}y
          onChange={handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      {/* component login,register and logout */}
      {token ? (
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <Button
            variant="primary"
            style={{ marginLeft: "30px", fontWeight: "bold" }}
            onClick={() => {
              setInterval(() => {
                window.location.href = "/";
                setToken(localStorage.clear());
              }, 800);
            }}
          >
            Logout
          </Button>
        </Link>
      ) : (
        <Fragment>
          <Link style={{ textDecoration: "none" }} to={`/login`}>
            <Button
              style={{ marginLeft: "20px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/register`}>
            <Button
              style={{ marginLeft: "15px", fontWeight: "bold" }}
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Link>
        </Fragment>
      )}

      {/* component logo */}
      <Toolbar style={{marginLeft: "20px"}}>
        <a href="/">
        <img  style={{ width: 115, height: 37 }} src={logo} alt="logo" />
        </a>
      </Toolbar>
    </Fragment>
  );
};

export default Navbar;
