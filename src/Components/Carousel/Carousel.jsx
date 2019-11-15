import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "3d-react-carousal";
import { getBooks } from "../../Public/Redux/actions/book";
//import Book from "../../Helpers/Book";

const SlideView = () => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.book.bookList);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let slides = [];
  book.forEach((books, index) => {
    slides.push(
      <img
        style={{ borderRadius: 7 }}
        height="290px"
        width="950px"
        src={books.imgUrl}
        alt={index}
      />
    );
  });

  // // console.log(slides);
  // <Carousel slides={slides} />;
  return <Carousel slides={slides} />;
};

export default SlideView;
