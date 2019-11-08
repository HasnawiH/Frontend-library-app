import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import imgAvatar from "../../Assets/img/img3.png";
import useStyles from "./SideNavStyle";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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

const SideNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* modal add data code */}
      <div className="modal-addData">
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Data
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
      </div>

      {/* sidenav code */}
      <Grid container justify="center" alignItems="center">
        <Avatar src={imgAvatar} className={classes.bigAvatar} />
        <h2 className={classes.h2}>Hasnawi Haeba</h2>
      </Grid>

      <List>
        <ListItem button>
          <ListItemText className={classes.listItem} primary="Explore" />
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.listItem} primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.listItem}
            primary="Add Book"
            onClick={handleClickOpen}
          />
        </ListItem>
      </List>
    </>
  );
};

export default SideNav;
