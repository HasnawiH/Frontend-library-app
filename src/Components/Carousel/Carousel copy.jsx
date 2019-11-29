import React from "react";
import { useSelector } from "react-redux";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

const Cardflow = () => {
  const Book = useSelector(state => state.book.bookList);

  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={6}
        navigation={true}
        enableHeading={true}
        media={{
          "@media (max-width: 800px)": {
            width: "700px",
            height: "200px"
          },
          "@media (min-width: 800px)": {
            width: "950px",
            height: "300px",
            borderRadius: 10
          }
        }}
      >
        {Book.map(books => {
          return (
            <img style={{ zIndex: 0 }} src={books.imgUrl} alt={books.title} />
          );
        })}
      </Coverflow>
    </StyleRoot>
  );
};

export default Cardflow;
