import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@material-ui/core";
import Book from "../../Helpers/Book";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

const Detail = props => {
  const index = props.match.params.index;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  //   console.log(index);
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Data
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Url Image"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "yellow", color: "white" }}
            autoFocus
            onClick={handleClose}
          >
            Save
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
          alt="Contemplative Reptile"
          height="250px"
          image={Book[index].imgUrl}
          title="Contemplative Reptile"
        />
        <Button
          style={{ marginLeft: 1040, top: "-230px" }}
          variant="contained"
          color="default"
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
          <Chip size="large" label={Book[index].genre} color="primary" />
          <br />
          <Chip
            size="small"
            variant="outlined"
            label={Book[index].status}
            color={Book[index].status === "Avaliable" ? "primary" : "secondary"}
            style={{ marginLeft: 500, bottom: "-50px" }}
          />
          <Typography gutterBottom variant="h4" component="h1">
            {Book[index].title}
          </Typography>
          <Typography
            style={{ width: "40%" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {Book[index].desc}
          </Typography>
          <Avatar
            src={Book[index].imgUrl}
            style={{
              width: 130,
              height: 150,
              borderRadius: 5,
              marginLeft: 900,
              top: "-310px"
            }}
          />
          <Button
            style={{ marginLeft: 910, top: "-180px" }}
            variant="contained"
            color="primary"
          >
            Borrow
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;
