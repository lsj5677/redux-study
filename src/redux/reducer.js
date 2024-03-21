import { combineReducers } from "@reduxjs/toolkit";
import boardSlice from "./slices/boardSlice";
import todoSlice from "./slices/todoSlice";

const rootReducer = combineReducers({
  board: boardSlice,
  todo: todoSlice,
});

export default rootReducer;
