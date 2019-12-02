import { combineReducers } from "redux";

import book from "./book";
import user from "./user";
import borrow from "./borrow";
import wishlist from "./wishlist"

const Reducers = combineReducers({
  book,
  user,
  borrow,
  wishlist
});

export default Reducers;
