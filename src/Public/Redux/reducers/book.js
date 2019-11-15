const initialState = {
  bookList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const book = (state = initialState, action) => {
  switch (action.type) {
    //case Get book
    case "GET_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "GET_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data
      };

    //case add book
    case "POST_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_BOOK_FULFILLED":
      state.bookList.push(action.payload.data);
      return {
        isLoading: false,
        isFulfilled: true,
        bookList: state.bookList
      };

    //case Update
    case "UPDATE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "UPDATE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "UPDATE_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data
      };

    //case delete

    case "DELETE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_BOOK_FULFILLED":
      const dataAfterDelete = state.bookList.filter(
        // eslint-disable-next-line eqeqeq
        book => book.id != action.payload.data.id
      );
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: dataAfterDelete
      };

    //case searchByTitle
    case "GET_TITLE_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "GET_TITLE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_TITLE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data
      };

    default:
      return state;
  }
};

export default book;
