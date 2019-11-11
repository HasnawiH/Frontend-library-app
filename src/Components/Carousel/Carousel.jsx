import React from "react";
import { Carousel } from "3d-react-carousal";
import Book from "../../Helpers/Book";

const SlideView = () => {
  let slides = [];
  Book.forEach((books, index) => {
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

  return <Carousel slides={slides} autoPlay={true} />;
};

export default SlideView;
