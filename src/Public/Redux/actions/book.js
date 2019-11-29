import Axios from "axios";

export const getBooks = () => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(`https://lib-backend.herokuapp.com/book`)
  };
};

export const searchByTitle = title => {
  return {
    type: "GET_TITLE",
    payload: Axios.get(`https://lib-backend.herokuapp.com/search/${title}`)
  };
};

export const addBook = (title, author, desc, genre, status, imgUrl) => {
  return {
    type: "POST_BOOK",
    payload: Axios.post(`https://lib-backend.herokuapp.com/book/add`, {
      title,
      author,
      desc,
      genre,
      status,
      imgUrl
    })
  };
};

export const updateBook = (id, title, author, desc, genre, status, imgUrl) => {
  console.log(`ini update`, id, title, author, desc, genre, status, imgUrl);
  return {
    type: "UPDATE_BOOK",
    payload: Axios.put(`https://lib-backend.herokuapp.com/update/${id}`, {
      title,
      author,
      desc,
      genre,
      status,
      imgUrl
    })
  };
};

export const deleteBook = id => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.delete(`https://lib-backend.herokuapp.com/book/${id}`)
  };
};

export const searchBook = title => {
  return {
    type: "SEARCH_BOOK",
    payload: title
  };
};
