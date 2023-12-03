import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", done: "false", text: "Щось зробити" }],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      // state.todos = [...actions.payload, ...state.todos] ;
      state.todos.unshift(actions.payload);
      console.log(actions.payload);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((item) => item.id !== actions.payload);
    },
    changeTodo: (state, actions) => {
      console.log(actions.payload);
      // state.todos = state.todos.map((todo) => {
      //   if (todo.id === actions.payload) console.log(true);
      // });
    },
  },
});

export const todoListReducer = todoListSlice.reducer;

export const { deleteTodo, addTodo, changeTodo } = todoListSlice.actions;
