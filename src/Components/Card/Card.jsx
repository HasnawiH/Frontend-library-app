import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const book = useSelector(state => state.book.bookList);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {book &&
            book.length > 0 &&
            book.map((books, index) => {
              return (
                <Card key={index} className={classes.card}>
                  <Link to={`detail/${books.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={books.imgUrl}
                      book={books.imgUrl}
                      title="View Detail"
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
                    &nbsp; &nbsp;
                    <Chip size="small" variant="outlined" label={books.genre} />
                    <br />
                    <Typography gutterBottom variant="h6" component="h2">
                      {books.title}
                    </Typography>
                    <Typography style={{ fontSize: 13 }}>
                      Author : {books.author}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {books.desc}
                    </Typography> */}
                  </CardContent>
                </Card>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

// const MapStateToProps = state => {
//   return {
//     book: state.book.bookList
//   };
// };

// export default connect(MapStateToProps)(ImgMediaCard);
export default ImgMediaCard;
