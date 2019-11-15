import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  TextField
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Swal from "sweetalert2";
import { updateBook, deleteBook } from "../../Public/Redux/actions/book";

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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    title: "",
    author: "",
    desc: "",
    genre: "",
    status: "",
    imgUrl: ""
  });

  const dispatch = useDispatch();
  const book = useSelector(state => state.book.bookList);

  useEffect(() => {
    const { id } = props.match.params;
    // eslint-disable-next-line eqeqeq
    setBookDetail(book.filter(newBook => newBook.id == id)[0]);
  }, []);

  //handleClose & Open
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  //handleBack
  // const handleBack = e => {
  //   window.location = "/";
  // };

  //handleChange;
  const handleChange = e => {
    e.persist();
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = e => {
    const { id } = props.match.params;
    e.preventDefault();
    const { title, author, desc, genre, status, imgUrl } = bookDetail;
    dispatch(updateBook(id, title, author, desc, genre, status, imgUrl));
    setBookDetail(bookDetail);
    handleClose();
  };

  //handle delete
  const handleDeleteButton = () => {
    const { id } = props.match.params;
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

  return (
    <>
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
            style={{ backgroundColor: "yellow", color: "white" }}
            autoFocus
            onClick={handleSubmit}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {/* Detail */}
      <Card className={classes.card}>
        {/* <Button style={{ marginLeft: 910 }} variant="contained" color="primary">
          Borrow
        </Button> */}
        <CardMedia
          component="img"
          alt={bookDetail.title}
          height="250px"
          image={bookDetail.imgUrl}
          title={bookDetail.title}
        />
        <Button
          style={{ marginLeft: 1040, top: "-230px" }}
          variant="contained"
          color="default"
          onClick={handleDeleteButton}
        >
          Delete
        </Button>
        <Button
          style={{ marginLeft: 960, top: "-266px" }}
          variant="contained"
          color="default"
          onClick={handleClickOpen}
        >
          Edit
        </Button>
        <CardContent
          style={{
            height: "275px",
            marginLeft: 120
          }}
        >
          <Chip size="large" label={bookDetail.genre} color="primary" />
          <br />
          <Chip
            size="small"
            variant="outlined"
            label={bookDetail.status}
            color={bookDetail.status === "Avaliable" ? "primary" : "secondary"}
            style={{ marginLeft: 500, bottom: "-50px" }}
          />
          <Typography gutterBottom variant="h4" component="h1">
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
          <Avatar
            src={bookDetail.imgUrl}
            style={{
              width: 130,
              height: 150,
              borderRadius: 5,
              marginLeft: 900,
              top: "-310px"
            }}
          />
          <Button
            style={{ marginLeft: 910, top: "-180px", borderRadius: 5 }}
            variant="contained"
            color="primary"
            disabled={bookDetail.status != "Avaliable"}
          >
            Borrow
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;
