const initialState = {
  login: {},
  register: {},
  isLoading: false,
  isFullfiled: false,
  isRejected: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    //==================LOGIN=========
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        login: action.payload
      };

    //================REGISTER======
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        register: action.payload
      };

    default:
      return state;
  }
};

export default user;
