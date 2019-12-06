import React from "react";
import { useSelector } from "react-redux";
import Coverflow from "react-coverflow";
// import { StyleRoot } from "radium";

const Cardflow = () => {
  const Book = useSelector(state => state.book.bookList);

  return (
    // <StyleRoot>
      <Coverflow 
       navigation
        displayQuantityOfSide={6}
        infiniteScroll
        media={{
          "@media (max-width: 800px)": {
            width: "700px",
            height: "200px"
          },
          "@media (min-width: 1000px)": {
            width: "1000px",
            height: "300px",
            borderRadius: 10,
            backgroundColor: "white"
          }
        }}
      >
        {Book.map(books => {
          return (
            <img  src={books.imgUrl} alt={books.title} />
          );
        })}
      </Coverflow>
  );
};

export default Cardflow;
