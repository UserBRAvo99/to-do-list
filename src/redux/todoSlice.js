import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, done: false, text: "Щось зробити" }] };

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
});

export const todoListReducer = todoListSlice.reducer;
