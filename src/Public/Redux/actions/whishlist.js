import Axios from "axios";

export const whishlistBooks = (id_book, id_user) => {
  return {
    type: "POST_BORROW",
    payload: Axios.post(`https://lib-backend.herokuapp.com/whislist`, {
      id_book,
      id_user
    })
  };
};

export const getWhishlist = id_user => {
  return {
    type: "GET_BORROW",
    payload: Axios.get(
      `https://lib-backend.herokuapp.com/whislist/get/${id_user}`
    )
  };
};
