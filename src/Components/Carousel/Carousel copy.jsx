import React from "react";
import { useSelector } from "react-redux";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
//import { getBooks } from "../../Public/Redux/actions/book";

const Cardflow = () => {
  const Book = useSelector(state => state.book.bookList);

  // useEffect(() => {
  //   dispatch(getBooks());
  // }, [dispatch]);

  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={4}
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
          return <img src={books.imgUrl} alt={books.title} />;
        })}
        {/* <img
          src="images/album-2.png"
          alt="Album two"
          data-action="http://passer.cc"
        />
        <img
          src="images/album-3.png"
          alt="Album three"
          data-action="https://doce.cc/"
        />
        <img
          src="images/album-4.png"
          alt="Album four"
          data-action="http://tw.yahoo.com"
        /> */}
      </Coverflow>
    </StyleRoot>
  );
};

export default Cardflow;
