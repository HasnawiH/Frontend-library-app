import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//import Book from "../../Helpers/Book";
import { getBooks } from "../../Public/Redux/actions/book";

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
  const [spacing] = useState(6);
  const [book, setBook] = useState([]);
  const dispatch = useDispatch();

  useEffect( () => {
    const result = dispatch(getBooks());
    setBook(result);
  }, [dispatch]);

  const list = book;
  console.log(list);
  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {list &&
            list.data.entries.length > 0 &&
            list.data.entries.map((books, index) => {
              return (
                <Card className={classes.card}>
                  <Link to={`detail/${index}`}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={books.imgUrl}
                      book={books.imgUrl}
                      title="Contemplative Reptile"
                    />
                  </Link>
                  <CardContent>
                    <Chip
                      size="small"
                      label={books.status}
                      color={
                        // eslint-disable-next-line eqeqeq
                        books.status == "Avaliable" ? "primary" : "secondary"
                      }
                    />
                    <Chip size="small" variant="outlined" label={books.genre} />
                    <Typography gutterBottom variant="h5" component="h2">
                      {books.title}
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

const MapStateToProps = state => {
  return {
    book: state.book
  };
};

export default connect(MapStateToProps)(ImgMediaCard);
