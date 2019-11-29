import React, { Fragment, useState, useEffect } from "react";
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

  //handleChange
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
              variant="primary"
              style={{ marginLeft: "30px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/register`}>
            <Button
              variant="primary"
              style={{ marginLeft: "0px", fontWeight: "bold" }}
            >
              Register
            </Button>
          </Link>
        </Fragment>
      )}
      <Toolbar>
        <img style={{ width: 32, height: 32 }} src={logo} alt="logo"></img>
        <h3 style={{ color: "black" }}>LibeX App</h3>
      </Toolbar>
    </Fragment>
  );
};

export default Navbar;
