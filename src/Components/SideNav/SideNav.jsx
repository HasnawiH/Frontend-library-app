import React, { useState, Fragment } from "react";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
  Button,
  Dialog,
  IconButton,
  Typography,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { Add, Explore, History } from "@material-ui/icons";
import imgAvatar from "../../Assets/img/img3.png";
import useStyles from "./SideNavStyle";
import { addBook } from "../../Public/Redux/actions/book";
import { getBorrow } from "../Public/Redux/actions/borrow";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

// function component
const SideNav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  //state
  const [books, setBooks] = useState({
    title: "",
    author: "",
    desc: "",
    genre: "",
    status: "",
    imgUrl: ""
  });

  //handleChange
  const handleChange = e => {
    e.persist();
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = e => {
    e.preventDefault();
    const { title, author, desc, genre, status, imgUrl } = books;
    dispatch(addBook(title, author, desc, genre, status, imgUrl));
    setInterval(() => {
      window.location.reload();
    }, 1000);
  };

  //decode token
  let id_user, name, level, user;
  if (token) {
    user = decode(token);
    id_user = user.user_id;
    name = user.name;
    level = user.level;
  }

  const handleHistory = e => {
    e.preventDefault();
    dispatch(getBorrow(id_user));
    window.location.href = "/history";
  };

  return (
    <Fragment>
      {/* modal add data code */}
      <div className="modal-addData">
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Data
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              name="title"
              value={books.title}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Author"
              type="email"
              name="author"
              value={books.author}
              fullWidth
              onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="email"
              name="desc"
              value={books.desc}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Genre"
              type="email"
              name="genre"
              value={books.genre}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Status"
              type="email"
              name="status"
              value={books.status}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Image Url"
              type="email"
              name="imgUrl"
              value={books.imgUrl}
              fullWidth
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" autoFocus onClick={handleSubmit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* sidenav code */}
      <Grid container justify="center" alignItems="center">
        <Avatar src={imgAvatar} className={classes.bigAvatar} />
      </Grid>
      <Grid container justify="center" alignItems="center">
        {token ? (
          <h2 style={{ paddingTop: "0px" }}>{name}</h2>
        ) : (
          <h2 style={{ paddingTop: "0px" }}>Hi, Guest</h2>
        )}
      </Grid>

      <List>
        <ListItem button>
          <Explore className={classes.icon} />
          <ListItemText className={classes.listItem} primary="Explore" />
        </ListItem>
        <ListItem button>
          <History className={classes.icon} />
          <ListItemText
            onClick={handleHistory}
            className={classes.listItem}
            primary="History"
          />
        </ListItem>

        {token && level === "admin" ? (
          <>
            <ListItem button>
              <Add className={classes.icon} />
              <ListItemText
                className={classes.listItem}
                primary="Add Book"
                onClick={handleClickOpen}
              />
            </ListItem>
            <ListItem button>
              <Add className={classes.icon} />
              <ListItemText
                className={classes.listItem}
                primary="Add Admin"
                onClick={handleClickOpen}
              />
            </ListItem>
          </>
        ) : (
          <ListItem button>
            <History className={classes.icon} />
            <ListItemText className={classes.listItem} primary="Whislist" />
          </ListItem>
        )}
      </List>
    </Fragment>
  );
};

export default SideNav;
