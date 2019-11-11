import Axios from "axios";

export const getBooks = () => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(`http://localhost:8000/book`)
  };
};
