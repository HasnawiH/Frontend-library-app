import Axios from "axios";

export const getBorrow = id_user => {
  return {
    type: "GET_BORROW",
    payload: Axios.get(
      `https://lib-backend.herokuapp.com/borrow/get/${id_user}`
    )
  };
};

export const borrowBooks = (id_book, id_user) => {
  return {
    type: "POST_BORROW",
    payload: Axios.post(`https://lib-backend.herokuapp.com/borrow`, {
      id_book,
      id_user
    })
  };
};


