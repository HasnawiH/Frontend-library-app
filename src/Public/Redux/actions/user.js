import Axios from "axios";

export const login = (email, password) => {
  return {
    type: "LOGIN",
    payload: Axios.post(`https://lib-backend.herokuapp.com/user/login`, {
      email,
      password
    })
  };
};

export const register = (name, email, password) => {
  console.log(name, email, password);
  return {
    type: "REGISTER",
    payload: Axios.post(`https://lib-backend.herokuapp.com/user/register`, {
      name,
      email,
      password
    })
  };
};
