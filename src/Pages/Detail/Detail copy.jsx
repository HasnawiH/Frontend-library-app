import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  Avatar,
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Grid
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Swal from "sweetalert2";
import { updateBook, deleteBook } from "../../Public/Redux/actions/book";
import { borrowBooks } from "../../Public/Redux/actions/borrow";
import { wishlistBooks } from "../../Public/Redux/actions/wishlist";

//styling 
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

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
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

//function component
const Detail = props => {
  const { id } = props.match.params;
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const book = useSelector(state => state.book.bookList);
  const [open, setOpen] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    title: "",
    author: "",
    desc: "",
    genre: "",
    status: "",
    imgUrl: ""
  });
 
  //handleClose & Open
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  //handleBack
  // const handleBack = e => {
  //   window.location.href = "/";
  // };

  //handleChange;
  const handleChange = e => {
    e.persist();
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleEdit = () => {
    const { title, author, desc, genre, status, imgUrl } = bookDetail;
    dispatch(updateBook(id, title, author, desc, genre, status, imgUrl));
    setBookDetail(bookDetail);
    setInterval(() => {
      handleClose();
    }, 1000);
  };

  //handleBorrow
  const handleBorrow = async () => {
    const id_book = props.match.params.id;
    await dispatch(borrowBooks(id_book, id_user));
  };

  //handleWishlist
  const handleWishlist = async () => {
    const id_book = props.match.params.id;
    await dispatch(wishlistBooks(id_book, id_user));
  };

  //handle delete
  const handleDeleteButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: async () => {
        try {
          await dispatch(deleteBook(id));
        } catch {
          Swal.fire("Failed!", "The book is failed to delete", "error");
        }
      }
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setInterval(() => (window.location = "/"), 2000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your process is cancelled",
          type: "error",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  };

  // decode token
  let id_user, level, user;
  if (token) {
    user = decode(token);
    id_user = user.user_id;
    level = user.level;
  }

  //lifecycle
  useEffect(() => {
    const { id } = props.match.params;
    // eslint-disable-next-line eqeqeq
    setBookDetail(book.filter(newBook => newBook.id == id)[0]);
  }, []);
  
  return (
    <>
      <Grid container style={{ flexGrow: 1 }}>

        {/* modal edit */}
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Edit Data
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              name="title"
              value={bookDetail.title}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Author"
              name="author"
              value={bookDetail.author}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              name="desc"
              value={bookDetail.desc}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Genre"
              name="genre"
              value={bookDetail.genre}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Status"
              name="status"
              value={bookDetail.status}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Image Url"
              name="imgUrl"
              value={bookDetail.imgUrl}
              fullWidth
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              autoFocus
              onClick={handleEdit}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>

        {/* Detail */}
        <Card className={classes.card}>
          <Grid>
          <CardMedia
            component="img"
            alt={bookDetail.title}
            height="300px"
            image={bookDetail.imgUrl}
            title={bookDetail.title}
          />
          </Grid>

          {/* ternary button delete and edit */}
          {token && level === "admin" ? (
            <>
              <Button
                style={{ marginLeft: 1060, top: "-230px" }}
                variant="contained"
                color="default"
                onClick={handleDeleteButton}
              >
                Delete
              </Button>
              <Button
                style={{ marginLeft: 980, top: "-266px" }}
                variant="contained"
                color="default"
                onClick={handleClickOpen}
              >
                Edit
              </Button>
            </>
          ) : (
            ""
          )}

          {/* content */}
          <CardContent
            style={{
              height: "275px",
              marginLeft: 150
            }}
          >
            <Chip size="large" label={bookDetail.genre} color="primary" />
            <br />
            <Typography
              size="medium"
              variant="h4"
              label={bookDetail.status}
              color={
                bookDetail.status === "Available" ? "primary" : "secondary"
              }
              style={{ marginLeft: 500, bottom: "-50px" }}
            >
              {bookDetail.status}
            </Typography>
            <Typography style={{ width: "40%" }} gutterBottom variant="h4" component="h1">
              {bookDetail.title}
            </Typography>
            <Typography
              style={{ width: "40%" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {bookDetail.desc}
            </Typography>

            {/* ternary button borrow and wishlist */}
            {level === "user" ? (
              <Fragment>
              <Button
                style={{ marginLeft: 840, borderRadius: 10 }}
                variant="contained"
                color="primary"
                disabled={bookDetail.status !== "Available"}
                onClick={e => {
                  e.preventDefault();
                  handleBorrow();
                  Swal.fire({
                    position: "center",
                    type: "success",
                    icon: "success",
                    title: "Borrow success",
                    showConfirmButton: false
                  });
                  setInterval(() => {
                    window.location.href = "/";
                  }, 1000);
                }}
              >
                Borrow
              </Button>
              <Button
              style={{ marginLeft: 840, borderRadius: 10, marginTop:20 }}
              variant="contained"
              color="primary"
              disabled={bookDetail.status !== "Available"}
              onClick={e => {
                e.preventDefault();
                handleWishlist();
                Swal.fire({
                  position: "center",
                  type: "success",
                  icon: "success",
                  title: "Add to wishlist success",
                  showConfirmButton: false
                });
                setInterval(() => {
                  window.location.href = "/";
                }, 1000);
              }}
            >
              Wishlist
            </Button>
            </Fragment>
            ) : (
              " "
            )}

            {/* logo libex */}
            <Avatar
              src={bookDetail.imgUrl}
              style={{
                width: 170,
                height: 200,
                borderRadius: 5,
                marginLeft: 810,
                top: "-340px",
                boxShadow: 20
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Detail;
