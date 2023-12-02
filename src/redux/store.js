import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./toDoSlice";

export const store = configureStore({
  reducer: {
    todoListSlice: todoListReducer,
  },
});
