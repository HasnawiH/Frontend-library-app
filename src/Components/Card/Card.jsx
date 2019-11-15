import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import InfiniteScroll from "react-infinite-scroller";
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
  // const [items, setItems] = useState(0);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // const fetchMoreData = () => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     setItems({
  //       items: items.concat(book.from({ length: 6 }))
  //     });
  //   }, 1500);
  // };

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {/* <InfiniteScroll
            dataLength={book.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          > */}
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
                      title="Lihat Detail"
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
                      {books.desc}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          {/* </InfiniteScroll> */}
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
