const initialState = {
  wishlistList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    //case Get book
    case "GET_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "GET_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_WISHLIST_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        wishlistList: action.payload.data
      };

    case "POST_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "POST_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "POST_WISHLIST_FULFILLED":
      state.wishlistList.push(action.payload.data);
      return {
        isLoading: false,
        isFulfilled: true,
        wishlistList: state.wishlistList
      };

    default:
      return state;
  }
};

export default wishlist;
