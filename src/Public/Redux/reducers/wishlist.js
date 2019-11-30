const initialState = {
  borrowList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    //case Get book
    case "GET_BORROW_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "GET_BORROW_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_BORROW_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowList: action.payload.data
      };

    case "POST_BORROW_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "POST_BORROW_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "POST_BORROW_FULFILLED":
      state.borrowkList.push(action.payload.data);
      return {
        isLoading: false,
        isFulfilled: true,
        borrowList: state.borrowkList
      };

    default:
      return state;
  }
};

export default wishlist;
