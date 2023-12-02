import { createSlice } from "@reduxjs/toolkit";

const initialState = { todo: [{ id: 1, done: false, task: "Щось зробити" }] };

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
});

export const todoListReducer = todoListSlice.reducer;
