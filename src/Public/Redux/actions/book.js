import Axios from "axios";

export const getBooks = () => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(`http://localhost:8000/book`)
  };
};

export const searchByTitle = title => {
  return {
    type: "GET_TITLE",
    payload: Axios.get(`http://localhost:8000/book/search/${title}`)
  };
};

export const addBook = (title, author, desc, genre, status, imgUrl) => {
  return {
    type: "POST_BOOK",
    payload: Axios.post(`http://localhost:8000/book/add`, {
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
  return {
    type: "UPDATE_BOOK",
    payload: Axios.put(`http://localhost:8000/book/update/${id}`, {
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
    payload: Axios.delete(`http://localhost:8000/book/${id}`)
  };
};
