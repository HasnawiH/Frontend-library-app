import Axios from "axios";

export const getWishlist = id_user => {
  return {
    type: "GET_WISHLIST",
    payload: Axios.get(
      `https://lib-backend.herokuapp.com/whislist/get/${id_user}`
    )
  };
};

export const wishlistBooks = (id_book, id_user) => {
  return {
    type: "POST_WISHLIST",
    payload: Axios.post(`https://lib-backend.herokuapp.com/whislist`, {
      id_book,
      id_user
    })
  };
};


