import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip
} from "@material-ui/core";
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

//function component
const History = () => {
  const classes = useStyles();
  const [spacing] = useState(6);
  const listBorrow = useSelector(state => state.borrow.borrowList);

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {listBorrow &&
              listBorrow.length > 0 &&
              listBorrow.map((books, index) => {
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
                      <br />
                      <Typography gutterBottom variant="h6" component="h2">
                        {books.title}
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
    </Fragment>
  );
};

export default History;
