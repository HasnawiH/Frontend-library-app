import React, { Fragment } from "react";
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
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
          <Explore className={classes.icon} />
          <ListItemText className={classes.listItem} primary="Explore" />
        </ListItem>
        <ListItem button>
          <History className={classes.icon} />
          <ListItemText className={classes.listItem} primary="History" />
        </ListItem>
        <ListItem button>
          <Add className={classes.icon} />
          <ListItemText
            className={classes.listItem}
            primary="Add Book"
            onClick={handleClickOpen}
          />
        </ListItem>
      </List>
    </Fragment>
  );
};

export default SideNav;
