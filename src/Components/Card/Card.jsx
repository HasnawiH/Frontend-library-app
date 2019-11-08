import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Book from "../../Helpers/Book";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    borderRadius: 10,
    margin: 20
  },
  root: {
    flexGrow: 1
  }
});

const ImgMediaCard = () => {
  const classes = useStyles();
  const [spacing] = React.useState(6);

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {Book.map((book, index) => {
            return (
              <Card className={classes.card}>
                <Link to={`detail/${index}`}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={book.imgUrl}
                    book={book.imgUrl}
                    title="Contemplative Reptile"
                  />
                </Link>
                <CardContent>
                  <Chip
                    size="small"
                    label={book.status}
                    color={
                      // eslint-disable-next-line eqeqeq
                      book.status == "Avaliable" ? "primary" : "secondary"
                    }
                  />
                  <Chip size="small" variant="outlined" label={book.genre} />
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.desc}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ImgMediaCard;
