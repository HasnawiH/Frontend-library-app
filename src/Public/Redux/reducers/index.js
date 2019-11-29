import { combineReducers } from "redux";

import book from "./book";
import user from "./user";
import borrow from "./borrow";

const Reducers = combineReducers({
  book,
  user,
  borrow
});

export default Reducers;
