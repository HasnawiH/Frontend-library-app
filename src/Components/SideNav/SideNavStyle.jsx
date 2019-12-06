import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    marginLeft: 3,
    width: 125,
    height: 125
  },
  menuItem: {
    color: "black",
    borderRadius: 5
  },
  listItem: {
    marginLeft: 15
  },
  icon: {
    color: "white",
    marginLeft: 20
  }
}));

export default useStyles;
