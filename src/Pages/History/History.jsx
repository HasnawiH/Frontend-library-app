import React, { Fragment, useState, useEffect } from "react";
import decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";
import imgEmpty from "../../Assets/img/empty.svg";
// import { Link } from "react-router-dom";
import { getBorrow } from "../../Public/Redux/actions/borrow";

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
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  let id_user, user;
  if (token) {
    user = decode(token);
    id_user = user.user_id;
  }

  useEffect(() => {
    dispatch(getBorrow(id_user));
  });

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
          <Grid
            style={{ paddingTop: "20px" }}
            container
            justify="center"
            spacing={spacing}
          >
            <h1 style={{ marginTop: "100px" }}> Your History Borrow</h1>
          </Grid>
          <hr style={{ paddingTop: "20px", height: "5px" }} />
          {listBorrow.length > 0 ? (
            <Grid
              style={{ paddingTop: "20px" }}
              container
              justify="center"
              spacing={spacing}
            >
              {listBorrow &&
                listBorrow.length > 0 &&
                listBorrow.map((books, index) => {
                  return (
                    <Card key={index} className={classes.card}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={books.imgUrl}
                        book={books.imgUrl}
                        title="View Detail"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                          {books.title}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary">
            {books.desc}
          </Typography> */}
                        <Typography variant="body2" color="textSecondary">
                          Date borrow : {books.rent_at}
                        </Typography>
                        &nbsp; &nbsp;
                        <br />
                        <Button variant="contained" color="primary">
                          Retrun
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </Grid>
          ) : (
            <Fragment>
              <Grid
                style={{ paddingTop: "50px" }}
                container
                justify="center"
                spacing={spacing}
              >
                <img style={{ width: "150px" }} src={imgEmpty} alt="" />
              </Grid>
              <Grid
                style={{ paddingTop: "50px" }}
                container
                justify="center"
                spacing={spacing}
              >
                <Typography variant="h6">History empty</Typography>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default History;
